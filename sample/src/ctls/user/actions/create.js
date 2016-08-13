const R = require('ramda');

const db = require('sample/db');
const views = require('sample/views');

const fieldSpecs = require('../fieldSpecs');

exports.views = {
  crumbItems: req => req.ctl.actions.list.views.crumbItems(req),

  heading: () => 'Novo usuário',

  fieldSet: req => [
    'name',
    'adminAccess',
    'active',
  ].map(name => {
    const spec = fieldSpecs[name];
    return spec.create || spec.edit;
  }),
};
