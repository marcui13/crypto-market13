const axios = require('axios');

class CryptocurrencyService {
  constructor() {
    // URLs de las APIs de criptomonedas
    this.coinGeckoUrl = 'https://api.coingecko.com/api/v3'; // CoinGecko API
    this.coinMarketCapUrl = 'https://pro-api.coinmarketcap.com/v1'; // CoinMarketCap API
    this.binanceUrl = 'https://api.binance.com/api/v3'; // Binance API
    this.krakenUrl = 'https://api.kraken.com/0/public'; // Kraken API
  }

  // Obtener datos de criptomonedas de CoinGecko
  async obtenerDatosDeCoinGecko() {
    try {
      const response = await axios.get(`${this.coinGeckoUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`); // Reemplaza 'some_endpoint' con la ruta adecuada de CoinGecko
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Obtener datos de criptomonedas de CoinMarketCap
  async obtenerDatosDeCoinMarketCap() {
    try {
      const response = await axios.get(`${this.coinMarketCapUrl}/some_endpoint`); // Reemplaza 'some_endpoint' con la ruta adecuada de CoinMarketCap
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Obtener datos de criptomonedas de Binance
  async obtenerDatosDeBinance() {
    try {
      const response = await axios.get(`${this.binanceUrl}/some_endpoint`); // Reemplaza 'some_endpoint' con la ruta adecuada de Binance
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Obtener datos de criptomonedas de Kraken
  async obtenerDatosDeKraken() {
    try {
      const response = await axios.get(`${this.krakenUrl}/some_endpoint`); // Reemplaza 'some_endpoint' con la ruta adecuada de Kraken
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CryptocurrencyService;
