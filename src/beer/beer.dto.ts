export class CreateOrUpdateBeerDto {
  name: string;
  price: number;
}

export class CreateOrUpdateBeerMessage {
  value: CreateOrUpdateBeerDto;
}
