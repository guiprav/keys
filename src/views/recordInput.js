const R = require('ramda');

const { input } = require('keys/hh');

exports = module.exports = opt => {
  const {
    selector,
    type,
    name,
    record,
  } = opt;

  if (exports[type]) {
    return exports[type](opt);
  }

  return input(selector || {}, R.omit(['selector'], opt), {
    value: record[name],
  });
};

exports.checkbox = opt => {
  const {
    selector,
    name,
    default: defaultChecked,
    record,
  } = opt;

  const fieldValue = record[name];

  let checked = defaultChecked;

  if (fieldValue !== undefined) {
    checked = fieldValue || null;
  }

  return input(selector || {}, R.omit(['selector'], opt), {
    value: 1,
    checked,
  });
};
