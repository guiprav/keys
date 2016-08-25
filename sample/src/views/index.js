const defaultsDeep = require('lodash/defaultsDeep');

module.exports = defaultsDeep(
  {},
  require('./index.generated'),
  require('keys/views'),
);
