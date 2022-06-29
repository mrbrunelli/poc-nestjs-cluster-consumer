import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppCluster } from './app.cluster';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        run: {
          partitionsConsumedConcurrently: 5,
        },
      },
    },
  );

  await app.listen();
}

AppCluster.register(bootstrap);
