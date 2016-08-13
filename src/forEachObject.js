const R = require('ramda');

module.exports = (fn, root) => {
  const traversed = [];

  return (function recurse(obj) {
    if (!R.is(Object, obj) || traversed.includes(obj)) {
      return;
    }

    traversed.push(obj);

    if (!fn(obj)) {
      Object.keys(obj).forEach(k => recurse(obj[k]));
    }
  }(root));
};
