const R = require('ramda');

module.exports = req => {
  const { ctls } = req;

  const itemLabel = ctlName => {
    const { views } = ctls[ctlName].actions.list;
    return (views.mainMenuListItemLabel || views.heading)(req);
  };

  // TODO: Let other actions besides 'list' optionally show up on the menu.
  return Object.keys(R.omit(['default'], ctls))
    .filter(k => {
      const listAction = ctls[k].actions.list;
      return listAction && listAction.showOnMainMenu !== false;
    })
    .sort((kA, kB) => {
      const a = itemLabel(kA);
      const b = itemLabel(kB);

      if(a < b) { return -1; }
      else if(a > b) { return 1; }
      else { return 0 };
    })
    .map(k => ({
      label: itemLabel(k),
      href: `/keys/${k}/list`,
    }));
};
