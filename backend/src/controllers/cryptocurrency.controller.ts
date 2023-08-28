import { get, HttpErrors } from '@loopback/rest';
import axios from 'axios';

export class CryptocurrencyController {
  @get('/cryptocurrency-data')
  async getCryptocurrencyData(): Promise<any> {
    try {
      // Realiza una solicitud GET a la API de CoinGecko
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

      // Devuelve los datos obtenidos de la API
      return response.data;
    } catch (error) {
      throw new HttpErrors.InternalServerError('Error al obtener datos de criptomonedas');
    }
  }
}
