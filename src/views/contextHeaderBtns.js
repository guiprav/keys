const Q = require('q');

exports = module.exports = req => exports[req.actionName](req);

exports.list = async req => [
  await req.action.views.contextHeaderBtn(req, 'create'),
];

exports.create = () => [];

exports.view = async req => {
  const { views } = req.action;

  return await Q.all([
    views.contextHeaderBtn(req, 'create'),
    views.contextHeaderBtn(req, 'edit'),
    views.contextHeaderBtn(req, 'delete'),
  ]);
};

exports.edit = async req => [
  await req.action.views.contextHeaderBtn(req, 'delete'),
];
