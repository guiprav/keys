const db = require('sample/db');

exports.load = req => db.user.getAll(req);

exports.heading = () => 'Usuários';

const fieldSpecs = require('../fieldSpecs');

exports.fieldSet = req => [
  'id',
  'name',
  'adminAccess',
].map(name => {
  const spec = fieldSpecs[name];
  return spec.list || spec.view;
});
