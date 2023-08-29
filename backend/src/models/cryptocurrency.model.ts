import { Entity, model, property } from "@loopback/repository";

@model({ settings: { strict: false } })
export class Cryptocurrency extends Entity {
  @property({
    type: "string",
    id: true,
    generated: false,
  })
  id: string;

  @property({
    type: "string",
    required: true,
  })
  symbol: string;

  @property({
    type: "string",
    required: true,
  })
  name: string;

  @property({
    type: "string",
  })
  image: string;

  @property({
    type: "number",
    required: true,
  })
  current_price: number;

  @property({
    type: "number",
    required: true,
  })
  market_cap: number;

  @property({
    type: "number",
    required: true,
  })
  market_cap_rank: number;

  @property({
    type: "number",
  })
  fully_diluted_valuation?: number;

  @property({
    type: "number",
    required: true,
  })
  total_volume: number;

  @property({
    type: "number",
    required: true,
  })
  high_24h: number;

  @property({
    type: "number",
    required: true,
  })
  low_24h: number;

  @property({
    type: "number",
    required: true,
  })
  price_change_24h: number;

  @property({
    type: "number",
    required: true,
  })
  price_change_percentage_24h: number;

  @property({
    type: "number",
    required: true,
  })
  market_cap_change_24h: number;

  @property({
    type: "number",
    required: true,
  })
  market_cap_change_percentage_24h: number;

  @property({
    type: "number",
    required: true,
  })
  circulating_supply: number;

  @property({
    type: "number",
  })
  total_supply?: number;

  @property({
    type: "number",
  })
  max_supply?: number;

  @property({
    type: "number",
  })
  ath?: number;

  @property({
    type: "number",
  })
  ath_change_percentage?: number;

  @property({
    type: "string",
  })
  ath_date?: string;

  @property({
    type: "number",
  })
  atl?: number;

  @property({
    type: "number",
  })
  atl_change_percentage?: number;

  @property({
    type: "string",
  })
  atl_date?: string;

  @property({
    type: "object",
  })
  roi?: {
    times: number;
    currency: string;
    percentage: number;
  };

  @property({
    type: "string",
  })
  last_updated?: string;

  constructor(data?: Partial<Cryptocurrency>) {
    super(data);
  }
}

export interface CryptocurrencyRelations {
  // Puedes definir relaciones si es necesario
}

export type CryptocurrencyWithRelations = Cryptocurrency &
  CryptocurrencyRelations;
