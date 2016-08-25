const views = require('.');

module.exports = req => {
  const { recordTypes } = views;

  const listHeading = typeName => recordTypes[typeName].list.heading();

  return Object.keys(recordTypes)
    .filter(k => {
      const listAction = recordTypes[k].list;
      return listAction && !listAction.hidden;
    })
    .sort((kA, kB) => {
      const a = listHeading(kA);
      const b = listHeading(kB);

      if(a < b) { return -1; }
      else if(a > b) { return 1; }
      else { return 0 };
    })
    .map(k => ({
      label: listHeading(k),
      href: `/keys/list/${k}`,
    }));
};
