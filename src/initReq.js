const R = require('ramda');

module.exports = (req, ctls, ctlName, actionName) => {
  const ctl = ctls[ctlName];
  const action = ctl.actions[actionName];

  Object.assign(req, {
    ctls,

    ctlName,
    actionName,

    ctl,
    action,

    data: R.mergeAll([
      req.query,
      req.body,
      req.params,
    ]),
  });
};
