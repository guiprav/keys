const { script } = require('keys/dist/hh');

module.exports = (src, ...rest) => script(...rest, { src });
