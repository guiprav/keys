exports = module.exports = req => exports[req.actionName](req);

exports.list = req => req.action.listTable(req);

exports.view = req => req.action.detailsTable(req);

exports.edit =
exports.create = req => req.action.recordForm(req);
