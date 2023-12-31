import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class User extends Model {
  @property({
    type: 'string',
  })
  username?: string;

  @property({
    type: 'number',
    required: true,
  })
  password: number;

  @property({
    type: 'date',
    required: true,
  })
  createdAt: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
