const db = require('sample/db');
const views = require('sample/views');

const fieldSpecs = require('../fieldSpecs');

exports.prepare = async req =>
  req.records = await db.user.getAll(req);

exports.views = {
  crumbItems: req => views.crumbItems(req).concat([
    {
      label: req.ctl.actions.list.views.heading(req),
      href: '/keys/user/list',
    },
  ]),

  heading: () => 'Usuários',

  fieldSet: req => [
    'name',
    'adminAccess',
    'active',
    'actions',
  ].map(name => {
    const spec = fieldSpecs[name];
    return spec.list || spec.view;
  }),
};
