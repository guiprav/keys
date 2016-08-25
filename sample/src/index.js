const R = require('ramda');

const express = require('express');
const app = express();

global.logTap = R.tap(console.log);

app.use(express.static(`${__dirname}/../static`));

const Keys = require('keys');

const ctls = require('sample/ctls');
const views = require('sample/views');

Keys.init(ctls, views);

async function getHandler (req, res) {
  try {
    res.send(await Keys.render(
      req,
      ctls,
      req.params.ctlName,
      req.params.actionName
    ));
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
