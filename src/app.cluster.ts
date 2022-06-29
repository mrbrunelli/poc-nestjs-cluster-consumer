import { Logger } from '@nestjs/common';
import cluster from 'node:cluster';
import os from 'node:os';

const logger = new Logger('AppCluster');

export class AppCluster {
  static register(callback: Function): void {
    if (cluster.isPrimary) {
      logger.debug('Starting primary cluster');

      const totalOfWorkers = os.cpus().length;

      for (let i = 0; i < totalOfWorkers; i++) {
        cluster.fork();
      }

      cluster.on('exit', (worker, code) => {
        const successCode = 0;

        if (code !== successCode) {
          logger.error(
            `Worker ${worker.process.pid} died. Starting new worker...`,
          );

          cluster.fork();
        }
      });
    } else {
      logger.debug(
        `Starting new NestJS microservice instance with worker ${process.pid}`,
      );

      callback();
    }
  }
}
