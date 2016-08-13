const { script } = require('keys/hh');

module.exports = (src, ...rest) => script(...rest, { src });
