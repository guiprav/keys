const { h1 } = require('keys/hh');

module.exports = req => h1('.keysMainMenu_heading',
  req.action.views.appTitle(req),
);
