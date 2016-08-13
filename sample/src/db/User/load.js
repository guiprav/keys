const Q = require('q');

module.exports = () => Q.when({
  id: 2,

  name: 'User B',
  adminAccess: true,
});
