const defaultsDeep = require('lodash/defaultsDeep');

Object.assign(exports, require('./index.generated'));

Object.keys(exports).forEach(
  ctlName => defaultsDeep(exports[ctlName], exports.default)
);
