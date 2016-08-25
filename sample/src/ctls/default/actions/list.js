const R = require('ramda');

const views = require('sample/views');

exports.get = async (req, res) => {
  const { action } = req;

  req.records = await action.load(req);

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
  'listTable',
], views));
