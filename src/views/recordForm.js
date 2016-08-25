const Q = require('q');

const { form, div } = require('keys/hh');

exports = module.exports = async (
  req,
  record = req.record,
) => {
  const { action } = req;

  const [
    content,
    actions,
  ] = await Q.all([
    action.recordFormContent(req, record),
    action.recordFormActions(req, record),
  ]);

  return form('.keysRecordForm', { method: 'post' },
    content,
    div('.keysRecordForm_actions', actions),
  );
};

exports.styles = {
  actionBtns: {
    select: '.keysRecordForm_actions',
    marginTop: '15px',
  },
};
