const { button } = require('keys/hh');

const views = require('.');

exports = module.exports = data => exports[data.actionName](data);

const saveBtn = attrs => button(
  '.keysRecordForm_actionBtn.keysRecordForm_saveBtn', 'Salvar', {
    type: 'submit', ...attrs,
  }
);

const cancelBtn = attrs => button(
  '.keysRecordForm_actionBtn.keysRecordForm_cancelBtn', 'Cancelar', {
    type: 'button', ...attrs,
  },
);

exports.edit = ({ recordTypeName, query: { id } }) => [
  saveBtn(), cancelBtn({
    'data-href': `/keys/view/${recordTypeName}?id=${id}`,
  }),
];

exports.create = ({ recordTypeName }) => [
  saveBtn(), cancelBtn({
    'data-href': `/keys/list/${recordTypeName}`,
  }),
];

exports.styles = {
  btn: {
    select: '.keysRecordForm_actionBtn',
    marginRight: '15px',
  },
};
