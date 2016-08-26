const stockViews = require('keys/dist/views');

module.exports = req => stockViews.headScripts(req).concat([
  req.action.views.headScript('/bundle.js'),
]);
