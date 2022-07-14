import { Logger } from '@nestjs/common';
import cluster from 'node:cluster';
import os from 'node:os';

const logger = new Logger('AppCluster');

// Coloque 0 para não utilizar Workers
const WORKERS = os.cpus().length;

export class AppCluster {
  static register(callback: Function): void {
    if (WORKERS > 0) {
      AppCluster.runWithWorkers(callback);
    } else {
      callback();
    }
  }

  private static runWithWorkers(callback: Function) {
    if (cluster.isPrimary) {
      logger.debug('Starting primary cluster...');

      for (let i = 0; i < WORKERS; i++) {
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
        `Starting new NestJS microservice instance with worker ${process.pid}...`,
      );
      callback();
    }
  }
}
