const Q = require('q');

module.exports = () => Q.when([
  {
    id: 1,
    name: 'User A',
    adminAccess: false,
  },

  {
    id: 2,
    name: 'User B',
    adminAccess: true,
  },
]);
