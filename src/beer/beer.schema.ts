import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BeerDocument = Beer & Document;

@Schema({ timestamps: true })
export class Beer {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;
}

export const BeerSchema = SchemaFactory.createForClass(Beer);
