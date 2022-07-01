import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload, Transport } from '@nestjs/microservices';
import { CreateOrUpdateBeerMessage } from './beer.dto';
import { BeerService } from './beer.service';

@Controller('beer')
export class BeerController {
  private readonly logger = new Logger(BeerController.name);

  constructor(private readonly beerService: BeerService) {}

  @MessagePattern('beers-topic', Transport.KAFKA)
  async createOrUpdate(@Payload() message: CreateOrUpdateBeerMessage) {
    this.logger.debug(JSON.stringify(message.value));
    return this.beerService.createOrUpdate(message.value);
  }
}
