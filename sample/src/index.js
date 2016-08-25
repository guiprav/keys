const mergeDeep = require('merge-deep');

const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/../static`));

const views = require('sample/views');

const ctls = require('sample/ctls');

app.get('/keys/:ctlName/:actionName', async (req, res) => {
  try {
    const { ctlName, actionName } = req.params;

    //console.log(ctls.default.actions[actionName]);

    const ctl = mergeDeep(ctls.default, ctls[ctlName]);
    const action = ctl.actions[actionName];

    Object.assign(req, {
      views,

      ctlName,
      actionName,

      ctl,
      action,
    });

    await action.get(req, res);
  }
  catch(err) {
    // TODO: Log, check for user-friendly messages, set flash?
    console.error(err);
    res.status(500).send();
  }
});

app.listen(process.env.PORT || 3000);
