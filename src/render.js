const R = require('ramda');

module.exports = async (req, ctls, ctlName, actionName) => {
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

  await action.prepare(req);

  const page = await action.views.render(req);

  return page.outerHTML;
};
