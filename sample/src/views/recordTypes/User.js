const R = require('ramda');

const db = require('sample/db');

const { input } = require('keys/hh');

const views = require('keys/views');

exports.list = {
  prepare: async data =>
    data.records = await db.User.list(R.pick(
      ['page', 'max'], data.query,
    )),

  heading: () => 'Usuários',

  listTableFields: [
    {
      label: () => 'ID',

      render: ({ id }) => views.linkTo(
        `/keys/view/User?id=${id}`, id
      ),
    },

    {
      label: () => 'Nome',
      render: R.prop('name'),
    },

    {
      label: () => 'Administrador?',

      render: ({ adminAccess }) => (
        adminAccess ? 'Sim' : 'Não'
      ),
    },
  ],
};

exports.view = {
  prepare: async data =>
    data.record = await db.User.load(data.query.id),

  heading: data => data.record.name,

  detailsTableFields: [
    {
      label: () => 'ID',

      render: ({ id }) => views.linkTo(
        `/keys/view/User?id=${id}`, id
      ),
    },

    {
      label: () => 'Nome',
      render: R.prop('name'),
    },

    {
      label: () => 'Administrador?',

      render: ({ adminAccess }) => (
        adminAccess ? 'Sim' : 'Não'
      ),
    },
  ],
};

exports.edit = {
  prepare: exports.view.prepare,

  heading: () => 'Editar usuário',

  detailsTableFields: [
    {
      label: () => 'Nome',

      render: ({ name } = {}) => input({
        type: 'text',
        name: 'name',
        value: name,
        required: true,
      }),
    },

    {
      label: () => 'Administrador?',

      render: ({ adminAccess = null } = {}) => input({
        type: 'checkbox',
        name: 'adminAccess',
        value: 1,
        checked: adminAccess,
      }),
    },
  ],
};

exports.create = {
  heading: () => 'Novo usuário',

  detailsTableFields: exports.edit.detailsTableFields,
};
