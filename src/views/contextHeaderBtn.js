const { button } = require('keys/hh');

module.exports = async (req, type) => {
  const { ctlName, ctl } = req;

  const btnAction = ctl.actions[type];

  if (!btnAction || btnAction.hidden) {
    return;
  }

  let attrs = {};

  switch (type) {
    case 'create':
    case 'edit':
      Object.assign(attrs, {
        'data-keys-href': {
          create: `/keys/${ctlName}/create`,
          edit: `/keys/${ctlName}/edit/${req.data.id}`,
        }[type],
      });
      break;

    case 'delete':
      Object.assign(attrs, {
        'data-keys-method': 'post',
        'data-keys-action': `/keys/${ctlName}/delete/${req.data.id}`,
      });
      break;

    default:
      throw new Error(`Unknown button type: '${type}'`);
  }

  return button('.keysContextHeader_btn',
    attrs, await btnAction.views.heading(req, {}),
  );
};
