const stockViews = require('keys/views');

module.exports = req => stockViews.headScripts().concat([
  req.views.headScript('/bundle.js'),
]);
