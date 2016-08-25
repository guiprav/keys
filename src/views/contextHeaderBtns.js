exports = module.exports = req => exports[req.actionName](req);

exports.list = req => ([
  req.views.contextHeaderBtn('create', req),
]);

exports.create = () => [];

exports.view = req => [
  req.views.contextHeaderBtn('create', req),
  req.views.contextHeaderBtn('edit', req),
  req.views.contextHeaderBtn('delete', req),
];

exports.edit = req => [
  req.views.contextHeaderBtn('delete', req),
];
