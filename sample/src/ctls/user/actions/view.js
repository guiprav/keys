const R = require('ramda');

const db = require('sample/db');
const views = require('sample/views');

const fieldSpecs = require('../fieldSpecs');

exports.prepare = async req =>
  req.record = await db.user.getSingle(req);

exports.views = {
  crumbItems: req => req.ctl.actions.list.views.crumbItems(req).concat([
    { label: 'Visualizar', href: '#' },
  ]),

  heading: (req, record = req.record) => record.name,

  fieldSet: req => [
    'name',
    'adminAccess',
    'active',
  ].map(name => {
    const spec = fieldSpecs[name];
    return spec.view;
  }),
};
