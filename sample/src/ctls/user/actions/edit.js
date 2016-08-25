const R = require('ramda');

const db = require('sample/db');

const fieldSpecs = require('../fieldSpecs');

exports.load = req => db.user.getSingle(req);

exports.views = {
  heading: (req, record = req.record) => record.name,

  fieldSet: req => [
    'name',
    'adminAccess',
    'active',
  ].map(name => {
    return fieldSpecs[name].edit;
  }),
};
