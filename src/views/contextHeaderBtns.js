const views = require('.');

exports = module.exports = data => exports[data.actionName](data);

exports.list = data => ([
  views.contextHeaderBtn('create', data),
]);

exports.create = () => ([]);

exports.view = data => ([
  views.contextHeaderBtn('create', data),
  views.contextHeaderBtn('edit', data),
  views.contextHeaderBtn('delete', data),
]);

exports.edit = data => ([
  views.contextHeaderBtn('delete', data),
]);
