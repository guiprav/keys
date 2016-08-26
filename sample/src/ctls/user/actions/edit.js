const R = require('ramda');

const db = require('sample/db');
const views = require('sample/views');

const fieldSpecs = require('../fieldSpecs');

exports.prepare = async req => 
  req.record = await db.user.getSingle(req);

exports.views = {
  crumbItems: req => req.ctl.actions.list.views.crumbItems(req).concat([
    { label: 'Editar', href: '#' },
  ]),

  heading: (req, record = req.record) =>
    record.name || 'Editar usuário',

  fieldSet: req => [
    'name',
    'adminAccess',
    'active',
  ].map(name => {
    return fieldSpecs[name].edit;
  }),
};
