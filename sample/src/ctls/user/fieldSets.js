const fieldsFromSpec = require('keys/fieldsFromSpec');

const fields = require('./fields');

exports.list =
exports.view = (req, records = req.records) =>
  fieldsFromSpec(req, records, fields, 'view', [
    'id',
    'name',
    'adminAccess',
  ]);

exports.edit =
exports.create = (req, record = req.record) =>
  fieldsFromSpec(req, record, fields, 'edit', [
    'id',
    'name',
    'adminAccess',
  ]);
