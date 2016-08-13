const initReq = require('./initReq');

module.exports = async (req, ctls, ctlName, actionName) => {
  initReq(req, ctls, ctlName, actionName);

  const { action } = req;

  if (action.prepare) {
    await action.prepare(req);
  }

  const page = await action.views.render(req);

  return page.outerHTML;
};
