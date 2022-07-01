import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrUpdateBeerDto } from './beer.dto';
import { Beer, BeerDocument } from './beer.schema';

@Injectable()
export class BeerService {
  constructor(@InjectModel(Beer.name) private beerModel: Model<BeerDocument>) {}

  async createOrUpdate(createOrUpdateBeerDto: CreateOrUpdateBeerDto) {
    const beer = await this.beerModel.findOneAndUpdate(
      { name: createOrUpdateBeerDto.name },
      createOrUpdateBeerDto,
      { upsert: true },
    );

    return beer;
  }
}
