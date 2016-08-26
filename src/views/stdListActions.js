const { button, span } = require('keys/hh');

module.exports = (req, record, ctlName) => {
  const { actions } = req.ctls[ctlName];

  const stdBtnSel = '.keysStdListActions_btn';

  const stdBtns = {
    view: button(stdBtnSel, 'Ver', {
      'data-keys-href': `/keys/${ctlName}/view`,
    }),

    edit: button(stdBtnSel, 'Editar', {
      'data-keys-href': `/keys/${ctlName}/edit`,
    }),

    delete: button(stdBtnSel, 'Deletar', {
      'data-keys-href': `/keys/${ctlName}/delete`,
    }),
  };

  return span('.keysStdListActions',
    Object.keys(stdBtns).map(actionName => {
      const action = actions[actionName];

      if (!action) {
        return;
      }

      const customBtn = action.views.listBtn || action.views.btn;

      if (customBtn) {
        return customBtn(req, record);
      }

      return stdBtns[actionName];
    }).filter(x => !!x),
  );
};
