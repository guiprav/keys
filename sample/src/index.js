const R = require('ramda');
const defaultsDeep = require('lodash/defaultsDeep');

const express = require('express');
const app = express();

global.logTap = R.tap(console.log);

app.use(express.static(`${__dirname}/../static`));

const views = require('sample/views');

const ctls = require('sample/ctls');

async function getHandler (req, res) {
  try {
    const { ctlName, actionName } = req.params;

    switch (actionName) {
      case 'list':
      case 'create':
        if (req.params.id) {
          res.sendStatus(404);
          return;
        }
        break;

      case 'view':
      case 'edit':
        if (!req.params.id) {
          res.sendStatus(404);
          return;
        }
        break;
    }

    const ctl = defaultsDeep({}, ctls[ctlName], ctls.default);
    const action = ctl.actions[actionName];

    // TODO: Rename {actionName / action => ctlActionName / ctlAction}.
    Object.assign(req, {
      views,

      ctlName,
      actionName,

      ctl,
      action,
    });

    req.data = R.mergeAll([
      req.query,
      req.body,
      req.params,
    ]);

    await action.get(req, res);
  }
  catch(err) {
    // TODO: Log, check for user-friendly messages, set flash?
    console.error(err);
    res.sendStatus(500);
  }
}

app.get('/keys/:ctlName/:actionName', getHandler);
app.get('/keys/:ctlName/:actionName/:id', getHandler);

app.listen(process.env.PORT || 3000);
