const stockViews = require('keys/views');

module.exports = req => stockViews.headScripts().concat([
  req.action.views.headScript('/bundle.js'),
]);
