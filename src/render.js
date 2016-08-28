const initReq = require('./initReq');

module.exports = async (req, res, ctls, ctlName, actionName) => {
  initReq(req, ctls, ctlName, actionName);

  const { action } = req;

  if (action.prepare) {
    await action.prepare(req, res);

    if (res.headersSent) {
      return;
    }
  }

  const page = await action.views.render(req);

  res.send(page.outerHTML);
};
