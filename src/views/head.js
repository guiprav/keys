const { head } = require('keys/dist/hh');

module.exports = req => {
  const { views } = req.action;

  return head(
    views.title(req),

    views.headStylesheets(req),
    views.headScripts(req),
  );
};
