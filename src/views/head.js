const { head } = require('keys/hh');

module.exports = req => head(
  req.views.title(req),

  req.views.headStylesheets(req),
  req.views.headScripts(req),
);
