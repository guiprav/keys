const { form, div } = require('keys/hh');

const views = require('.');

exports = module.exports = async data => {
  const { recordTypeAction } = data;

  const detailsTable = (
    recordTypeAction.detailsTable || views.detailsTable
  );

  const formActions = (
    recordTypeAction.recordFormActions || views.recordFormActions
  );

  return form('.keysRecordForm', { method: 'post' },
    await detailsTable({
      fields: recordTypeAction.detailsTableFields,
      record: data.record,
    }),

    div('.keysRecordForm_actions', formActions(data)),
  );
};

exports.styles = {
  actionBtns: {
    select: '.keysRecordForm_actions',
    marginTop: '15px',
  },
};
