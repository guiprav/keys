const mergeDeep = require('merge-deep');

module.exports = mergeDeep(
  require('keys/views'),
  require('./index.generated'),
);
