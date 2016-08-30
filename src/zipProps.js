const R = require('ramda');

const allEqual = require('keys/dist/allEqual');

module.exports = unzipped => {
  const keys = Object.keys(unzipped);

  const lengths = keys.map(k => unzipped[k].length);

  if (!allEqual(lengths)) {
    throw new Error('All arrays must have equal length');
  }

  return R.times(i => {
    const zipped = {};

    keys.forEach(
      k => zipped[k] = unzipped[k][i]
    );

    return zipped;
  }, lengths[0]);
};
