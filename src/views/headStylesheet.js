const { link } = require('keys/hh');

module.exports = (href, ...rest) => link(...rest, {
  rel: 'stylesheet', href,
});
