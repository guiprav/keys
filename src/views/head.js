const { head } = require('keys/hh');

module.exports = req => {
  const { views } = req.action;

  return head(
    views.title(req),

    views.headStylesheets(req),
    views.headScripts(req),
  );
};
