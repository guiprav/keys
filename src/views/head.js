const { head } = require('keys/hh');

const views = require('.');

module.exports = data => head(
  views.title(data),

  views.headStylesheets(data),
  views.headScripts(data),
);
