const R = require('ramda');

const views = require('sample/views');

exports.get = async (req, res) => {
  const { actionName, action } = req;

  if (action.load) {
    const loadTargetProp = (
      actionName === 'list' ? 'records' : 'record'
    );

    req[loadTargetProp] = await action.load(req);
  }

  const page = await action.render(req);

  res.send(page.outerHTML);
};

exports.render = views.adminShell;

Object.assign(exports, R.pick([
  'crumbItems',
  'contextHeader',
  'contextHeaderBtns',
  'contentWrapper',
  'content',
  'recordForm',
  'recordFormContent',
  'recordFormActions',
  'listTable',
  'detailsTable',
], views));
