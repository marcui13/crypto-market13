// common/models/cryptocurrency.js
module.exports = function(Cryptocurrency) {
    Cryptocurrency.observe('after save', (ctx, next) => {
      const CryptocurrencyService = require('../services/cryptocurrency-service'); // Ajusta la ruta según tu estructura
      const cryptocurrencyService = new CryptocurrencyService();
  
      // Configura un cron job para actualizar los datos cada hora
      Cryptocurrency.app.models.CronJob.create({
        name: 'actualizarCriptomonedas',
        schedule: '0 * * * *', // Cada hora
        onTick: async () => {
          const datosDeCriptomonedas = await cryptocurrencyService.obtenerDatosDeCriptomonedas();
          // Actualiza tus modelos de criptomonedas aquí con los datos obtenidos
        },
        start: true,
      });
  
      next();
    });
  };
  