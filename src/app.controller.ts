import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('my-topic', Transport.KAFKA)
  getHello(@Payload() message: any) {
    this.appService.getHello(message);
  }
}
