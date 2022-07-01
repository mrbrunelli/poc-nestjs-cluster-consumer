import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BeerController } from './beer.controller';
import { Beer, BeerSchema } from './beer.schema';
import { BeerService } from './beer.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Beer.name, schema: BeerSchema }]),
  ],
  controllers: [BeerController],
  providers: [BeerService],
})
export class BeerModule {}
