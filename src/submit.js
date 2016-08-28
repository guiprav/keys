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

  const result = await action.submit(req, res);

  if (!res.headersSent) {
    switch (actionName) {
      case 'create':
        res.send({
          redirect: `/keys/${ctlName}/view/${result}`,
        });
        break;

      case 'edit':
        res.send({
          redirect: `/keys/${ctlName}/view/${req.data.id}`,
        });
        break;

      case 'delete':
        res.send({
          redirect: `/keys/${ctlName}/list`,
        });
        break;

      default:
        throw new Error('Response never sent');
    }
  }
};
