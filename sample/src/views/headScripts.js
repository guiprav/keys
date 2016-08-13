const stockViews = require('keys/views');

module.exports = req => stockViews.headScripts(req).concat([
  req.action.views.headScript('/bundle.js'),
]);
