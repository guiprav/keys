const R = require('ramda');

const { input } = require('keys/hh');

exports = module.exports = opt => {
  const {
    type,
    selector,
  } = opt;

  if (exports[type]) {
    return exports[type](opt);
  }

  return input(selector, R.omit(['selector'], opt));
};

exports.checkbox = opt => {
  const {
    name,
    record,
    default: defaultChecked,
    selector,
  } = opt;

  const fieldValue = record[name];

  let checked = defaultChecked;

  if (fieldValue !== undefined) {
    checked = fieldValue || null;
  }

  return input(selector, R.omit(['selector'], opt), {
    value: 1,
    checked,
  });
};
