const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/../static`));

const views = require('./views');

app.get('/keys/:action/:type', async (req, res) => {
  try {
    res.send(await views.render({
      recordTypeName: req.params.type,
      actionName: req.params.action,

      query: req.query,
    }));
  }
  catch(err) {
    console.error(err);
    res.status(500).send();
  }
});

app.listen(process.env.PORT || 3000);
