const { button } = require('keys/hh');

exports = module.exports = (type, data) => {
  const { recordTypeName, recordType } = data;

  if (!recordType[type] || recordType[type].hidden) {
    return null;
  }

  let attrs = {};

  switch (type) {
    case 'create':
    case 'edit':
      Object.assign(attrs, {
        'data-href': {
          create: `/keys/create/${recordTypeName}`,
          edit: `/keys/edit/${recordTypeName}?id=${data.query.id}`,
        }[type],
      });
      break;

    case 'delete':
      Object.assign(attrs, {
        'data-keys-record-action': 'delete',
        'data-keys-record-type': recordTypeName,
        'data-keys-record-id': data.query.id,
      });
      break;

    default:
      throw new Error(`Unknown button type: '${type}'`);
  }

  return button('.keysContextHeader_btn',
    attrs, recordType[type].heading(),
  );
};

exports.styles = {
  btn: {
    select: '.keysContextHeader_btn',
    marginLeft: '15px',
  },
};
