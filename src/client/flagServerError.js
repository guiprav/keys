const Keys = require('keys/dist/client');

module.exports = () => {
  Keys.pushAlert(
    'red', 'Erro de servidor. Por favor, tente novamente mais tarde.'
  );
};
