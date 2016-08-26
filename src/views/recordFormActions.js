const localReferrerOr = require('keys/dist/localReferrerOr');

const { button } = require('keys/dist/hh');

module.exports = (req, ...rest) =>
  exports[req.actionName](req, ...rest);

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

exports.edit = req => [
  saveBtn(), cancelBtn({
    'data-keys-href': localReferrerOr(
      req, `/keys/${req.ctlName}/view/${req.data.id}`,
    ),
  }),
];

exports.create = req => [
  saveBtn(), cancelBtn({
    'data-keys-href': localReferrerOr(
      req, `/keys/${req.ctlName}/list`,
    ),
  }),
];
