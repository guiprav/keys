const R = require('ramda');

const db = require('sample/db');

const listAction = require('./list');

exports.prepare = async req =>
  req.record = await db.user.getSingle(req);

exports.views = {
  heading: (req, record = req.record) => record.name,

  fieldSet: listAction.views.fieldSet,
};
