const { button } = require('keys/dist/hh');

module.exports = () => button('.keysMainMenu_signOutBtn', 'Sair', {
  'data-keys-method': 'post',
  'data-keys-action': '/keys/auth/signOut',
});
