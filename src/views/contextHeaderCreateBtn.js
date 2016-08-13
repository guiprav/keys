module.exports = data => {
  const { recordTypeName, recordType } = data;

  if (!recordType.create || recordType.create.hidden) {
    return null;
  }

  return button('.keysContextHeader_btn',
    recordType.create.heading(), {
      'data-href': `/keys/create/${recordTypeName}`,
    },
  );
};
