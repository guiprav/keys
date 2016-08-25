const { button } = require('keys/hh');

exports = module.exports = async (req, type) => {
  const { ctlName, ctl } = req;

  const btnAction = ctl.actions[type];

  if (!btnAction || btnAction.hidden) {
    return null;
  }

  let attrs = {};

  switch (type) {
    case 'create':
    case 'edit':
      Object.assign(attrs, {
        'data-href': {
          create: `/keys/${ctlName}/create`,
          edit: `/keys/${ctlName}/edit?id=${req.query.id}`,
        }[type],
      });
      break;

    case 'delete':
      Object.assign(attrs, {
        'data-keys-record-action': 'delete',
        'data-keys-record-type': ctlName,
        'data-keys-record-id': req.query.id,
      });
      break;

    default:
      throw new Error(`Unknown button type: '${type}'`);
  }

  return button('.keysContextHeader_btn',
    attrs, await btnAction.views.heading(),
  );
};

exports.styles = {
  btn: {
    select: '.keysContextHeader_btn',
    marginLeft: '15px',
  },
};
