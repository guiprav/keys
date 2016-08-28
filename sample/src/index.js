global.logTap = require('ramda').tap(console.log);

const express = require('express');
const app = express();

const Keys = require('keys');

app.use(express.static(`${__dirname}/../static`));
app.use(express.static(Keys.staticDir));

const ctls = require('sample/ctls');

{
  async function getHandler (req, res) {
    try {
      const { ctlName, actionName } = req.params;

      if (!Keys.ctlActionExists(ctls, ctlName, actionName)) {
        res.sendStatus(404);
        return;
      }

      await Keys.render(req, res, ctls, ctlName, actionName);
    }
    catch(err) {
      // TODO: Log, check for user-friendly messages, set flash?
      console.error(err);
      res.sendStatus(500);
    }
  }

  app.get('/keys/:ctlName/:actionName', getHandler);
  app.get('/keys/:ctlName/:actionName/:id', getHandler);
}

{
  async function postHandler (req, res) {
    try {
      const { ctlName, actionName } = req.params;

      if (!Keys.ctlActionExists(ctls, ctlName, actionName)) {
        res.sendStatus(404);
        return;
      }

      await Keys.submit(req, res, ctls, ctlName, actionName);
    }
    catch(err) {
      // TODO: Log, check for user-friendly messages, set flash?
      console.error(err);
      res.sendStatus(500);
    }
  }

  app.post('/keys/:ctlName/:actionName', postHandler);
  app.post('/keys/:ctlName/:actionName/:id', postHandler);
}

app.listen(process.env.PORT || 3000);
