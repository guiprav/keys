const views = require('keys/views');

const keysHeadScripts = views.headScripts;

module.exports = () => keysHeadScripts().concat([
  views.headScript('/bundle.js'),
]);
