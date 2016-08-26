const { title } = require('keys/dist/hh');

module.exports = req => title(
  `${req.action.views.heading(req)} - ${req.action.views.appTitle(req)}`
);
