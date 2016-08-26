const Q = require('q');

const { form, div } = require('keys/hh');

module.exports = async (
  req,
  record = req.record,
) => {
  const { views } = req.action;

  const [
    content,
    actions,
  ] = await Q.all([
    views.recordFormContent(req, record),
    views.recordFormActions(req, record),
  ]);

  return form('.keysRecordForm', { method: 'post' },
    content,
    div('.keysRecordForm_actions', actions),
  );
};
