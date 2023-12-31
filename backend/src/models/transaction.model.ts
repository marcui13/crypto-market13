import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Transaction extends Model {
  @property({
    type: 'string',
    required: true,
  })
  cryptocurrency: string;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'string',
    required: true,
  })
  transactionType: string;

  @property({
    type: 'date',
    required: true,
  })
  timestamp: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Transaction>) {
    super(data);
  }
}

export interface TransactionRelations {
  // describe navigational properties here
}

export type TransactionWithRelations = Transaction & TransactionRelations;
