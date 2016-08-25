// TODO: Don't depend on LoDash for this.
const defaultsDeep = require('lodash/defaultsDeep');

module.exports = (ctls, views) => Object.keys(ctls).forEach(
  ctlName => Object.keys(ctls[ctlName].actions).forEach(actionName => {
    const action = ctls[ctlName].actions[actionName];

    action.views = action.views || {};

    defaultsDeep(action.views, views);
  })
);
