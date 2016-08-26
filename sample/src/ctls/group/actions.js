const R = require('ramda');

const db = require('sample/db');

const fieldSpecs = require('./fieldSpecs');

exports.list = {
  prepare: async req =>
    req.records = await db.user.getAll(req),

  views: {
    heading: () => 'Grupos',

    fieldSet: req => [
      'id',
      'name',
      'active',
    ].map(name => {
      const spec = fieldSpecs[name];
      return spec.list || spec.view;
    }),
  },
};

exports.view = {
  prepare: async req =>
    req.record = await db.user.getSingle(req),

  views: {
    heading: (req, record = req.record) => record.name,

    fieldSet: req => [
      'name',
      'active',
    ].map(name => {
      const spec = fieldSpecs[name];
      return spec.view;
    }),
  },
};

exports.edit = {
  prepare: exports.view.prepare,

  views: {
    heading: (req, record = req.record) =>
      record.name || 'Editar grupo',

    fieldSet: req => [
      'name',
      'active',
    ].map(name => {
      const spec = fieldSpecs[name];
      return spec.edit;
    }),
  },
};

exports.create = {
  views: {
    heading: () => 'Novo grupo',

    fieldSet: req => [
      'name',
      'active',
    ].map(name => {
      const spec = fieldSpecs[name];
      return spec.create || spec.edit;
    }),
  },
};

exports.delete = {
  views: {
    heading: () => 'Deletar grupo',
  },
};
