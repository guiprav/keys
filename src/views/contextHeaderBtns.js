exports = module.exports = req => exports[req.actionName](req);

exports.list = req => ([
  req.action.views.contextHeaderBtn('create', req),
]);

exports.create = () => [];

exports.view = req => {
  const { views } = req.action;

  return [
    views.contextHeaderBtn('create', req),
    views.contextHeaderBtn('edit', req),
    views.contextHeaderBtn('delete', req),
  ];
};

exports.edit = req => [
  req.action.views.contextHeaderBtn('delete', req),
];
