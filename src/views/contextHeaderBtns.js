const views = require('.');

exports = module.exports = req => exports[req.actionName](req);

exports.list = req => ([
  views.contextHeaderBtn('create', req),
]);

exports.create = () => [];

exports.view = req => [
  views.contextHeaderBtn('create', req),
  views.contextHeaderBtn('edit', req),
  views.contextHeaderBtn('delete', req),
];

exports.edit = req => [
  views.contextHeaderBtn('delete', req),
];
