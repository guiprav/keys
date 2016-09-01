const R = require('ramda');

module.exports = () => [
  {
    label: 'Ativos',
    name: 'active',

    query: req => R.merge(req.query, {
      active: (req.query.active ? undefined : 1),
      inactive: undefined,
    }),
  },

  {
    label: 'Inativos',
    name: 'inactive',

    query: req => R.merge(req.query, {
      inactive: (req.query.inactive ? undefined : 1),
      active: undefined,
    }),
  },
];
