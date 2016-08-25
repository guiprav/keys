const R = require('ramda');

const db = require('sample/db');

const fieldSpecs = require('../fieldSpecs');

exports.load = req => db.user.getSingle(req);

exports.heading = (req, record = req.record) => record.name;

exports.fieldSet = req => [
  'name',
  'adminAccess',
  'active',
].map(name => {
  return fieldSpecs[name].edit;
});
