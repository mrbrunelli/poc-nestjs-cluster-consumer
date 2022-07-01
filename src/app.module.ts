import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BeerModule } from './beer/beer.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://beer:beer@localhost:27017/?authMechanism=DEFAULT',
    ),
    BeerModule,
  ],
})
export class AppModule {}
