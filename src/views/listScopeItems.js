const R = require('ramda');

module.exports = () => [
  {
    label: 'Ativos',

    query: {
      active: '1',
    },
  },

  {
    label: 'Inativos',

    query: {
      active: '0',
    },
  },
];
