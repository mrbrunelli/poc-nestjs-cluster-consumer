import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import cluster from 'node:cluster';

const logger = new Logger('Main');

async function bootstrap() {
  if (cluster.isPrimary) {
    logger.debug(`Starting primary cluster ${process.pid}`);

    for (let i = 0; i < 9; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code) => {
      if (code !== 0) {
        logger.error(
          `Worker ${worker.process.pid} is dead. Restarting new worker...`,
        );
        cluster.fork();
      }
    });
  } else {
    logger.debug(
      `Starting NestJS microservice instance with worker ${process.pid}`,
    );

    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9092'],
          },
        },
      },
    );

    await app.listen();
  }
}

bootstrap();
