const views = require('sample/views');

exports.id = {
  view: {
    label: () => 'ID',

    data: (req, record = {}) => views.linkTo(
      `/view/User/${record.id}`, record.id,
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

    data: (req, record = {}) => views.recordInput({
      type: 'text',
      name: 'name',
      record,
    }),
  },
};

exports.adminAccess = {
  view: {
    label: () => 'Administrador?',
    data: (req, record = {}) => views.flag(record.adminAccess),
  },

  edit: {
    label: () => 'Administrador?',

    data: (req, record = {}) => views.recordInput({
      type: 'checkbox',
      name: 'adminAccess',
      record,
    }),
  },
};
