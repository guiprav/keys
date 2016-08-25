const R = require('ramda');

const db = require('sample/db');

const fieldSpecs = require('../fieldSpecs');

exports.heading = () => 'Novo usuário';

exports.fieldSet = req => [
  'name',
  'adminAccess',
  'active',
].map(name => {
  const spec = fieldSpecs[name];
  return spec.create || spec.edit;
});
