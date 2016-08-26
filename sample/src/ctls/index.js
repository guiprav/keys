const initCtls = require('keys/initCtls');

const views = require('sample/views');

Object.assign(exports, require('./index.generated'));

initCtls(exports, views);
