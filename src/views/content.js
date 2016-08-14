const views = require('.');

exports = module.exports = data => exports[data.actionName](data);

exports.list = data => {
  const { recordTypeAction } = data;

  const listTable = (recordTypeAction.listTable || views.listTable);

  return listTable({
    fields: recordTypeAction.listTableFields,
    records: data.records,
  });
};

exports.view = data => {
  const { recordTypeAction } = data;

  const detailsTable = (
    recordTypeAction.detailsTable || views.detailsTable
  );

  return detailsTable({
    fields: recordTypeAction.detailsTableFields,
    record: data.record,
  });
};

exports.edit = exports.create = data => {
  const { recordTypeAction } = data;

  const recordForm = (
    recordTypeAction.recordForm || views.recordForm
  );

  return recordForm(data);
};
