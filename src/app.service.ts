import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(message: any) {
    this.logger.debug(JSON.stringify(message.value));
  }
}
