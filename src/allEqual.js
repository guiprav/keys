const R = require('ramda');

module.exports = xs => xs.every(R.equals(xs[0]));
