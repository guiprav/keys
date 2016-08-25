const R = require('ramda');

const db = require('sample/db');

const fieldSpecs = require('../fieldSpecs');

exports.prepare = async req => 
  req.record = await db.user.getSingle(req);

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
