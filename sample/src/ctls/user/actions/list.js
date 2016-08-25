const db = require('sample/db');

const fieldSpecs = require('../fieldSpecs');

exports.load = req => db.user.getAll(req);

exports.heading = () => 'Usuários';

exports.fieldSet = req => [
  'id',
  'name',
  'adminAccess',
].map(name => {
  const spec = fieldSpecs[name];
  return spec.list || spec.view;
});
