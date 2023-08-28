import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Cryptocurrency extends Model {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  symbol: string;

  @property({
    type: 'number',
    required: true,
  })
  marketCap: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cryptocurrency>) {
    super(data);
  }
}

export interface CryptocurrencyRelations {
  // describe navigational properties here
}

export type CryptocurrencyWithRelations = Cryptocurrency & CryptocurrencyRelations;
