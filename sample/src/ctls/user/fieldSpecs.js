const { button } = require('keys/dist/hh');

exports.id = {
  view: {
    label: () => 'ID',

    data: (req, record = {}) => req.action.views.linkTo(
      `/keys/user/view/${record.id}`, record.id,
    ),
  },
};

exports.name = {
  view: {
    label: () => 'Nome',
    data: (req, record = {}) => record.name,
  },

  edit: {
    label: () => 'Nome',

    data: (req, record = {}) => req.action.views.recordInput({
      type: 'text',
      name: 'name',
      record,
    }),
  },
};

exports.adminAccess = {
  view: {
    label: () => 'Administrador?',

    data: (req, record = {}) => req.action.views.flag(
      req, record.adminAccess,
    ),
  },

  edit: {
    label: () => 'Administrador?',

    data: (req, record = {}) => req.action.views.recordInput({
      type: 'checkbox',
      name: 'adminAccess',
      record,
    }),
  },
};

exports.active = {
  view: {
    label: () => 'Ativo?',

    data: (req, record = {}) => req.action.views.flag(
      req, record.active,
    ),
  },

  edit: {
    label: () => 'Ativo?',

    data: (req, record = {}) => req.action.views.recordInput({
      type: 'checkbox',
      name: 'active',
      record,
    }),
  },

  create: {
    label: () => 'Ativo?',

    data: (req, record = {}) => req.action.views.recordInput({
      type: 'checkbox',
      name: 'active',
      default: true,
      record,
    }),
  },
};

exports.actions = {
  list: {
    data: (req, record = req.record) => 
      req.action.views.stdListActions(req, record, 'user'),
  },
};
