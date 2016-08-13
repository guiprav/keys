const views = require('.');

exports = module.exports = data => exports[data.actionName](data);

exports.list = data => {
  const { recordTypeAction } = data;

  return (recordTypeAction.listTable || views.listTable)({
    fields: recordTypeAction.listTableFields,
    records: data.records,
  });
};

exports.view = exports.edit = exports.create = data => {
  const { recordTypeAction } = data;

  return (recordTypeAction.detailsTable || views.detailsTable)({
    fields: recordTypeAction.detailsTableFields,
    record: data.record,
  });
};
