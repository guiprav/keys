const db = require('sample/db');

const fieldSpecs = require('../fieldSpecs');

exports.prepare = async req =>
  req.records = await db.user.getAll(req);

exports.views = {
  heading: () => 'Usuários',

  fieldSet: req => [
    'id',
    'name',
    'adminAccess',
    'active',
  ].map(name => {
    const spec = fieldSpecs[name];
    return spec.list || spec.view;
  }),
};
