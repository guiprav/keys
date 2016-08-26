// TODO: Don't depend on LoDash for this.
const defaultsDeep = require('lodash/defaultsDeep');

const stockViews = require('./views');

module.exports = (ctls, views) => {
  defaultsDeep(views, stockViews);

  Object.keys(ctls).forEach(
    ctlName => Object.keys(ctls[ctlName].actions).forEach(actionName => {
      const action = ctls[ctlName].actions[actionName];

      action.views = action.views || {};

      defaultsDeep(action.views, views);
    })
  );
};
