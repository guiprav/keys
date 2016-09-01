const Q = require('q');

exports = module.exports = req => exports[req.actionName](req);

exports.list = req => Q.all([
  req.action.views.listScopes(req),
  req.action.views.listTable(req),
]);

exports.view = req => req.action.views.detailsTable(req);

exports.edit =
exports.create = req => req.action.views.recordForm(req);
