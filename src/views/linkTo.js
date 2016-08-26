const { a } = require('keys/dist/hh');

module.exports = (href, ...rest) => a(...rest, { href });
