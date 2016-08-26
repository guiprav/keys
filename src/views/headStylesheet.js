const { link } = require('keys/dist/hh');

module.exports = (href, ...rest) => link(...rest, {
  rel: 'stylesheet', href,
});
