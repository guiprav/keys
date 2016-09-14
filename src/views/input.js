const R = require('ramda');

const moment = require('moment');

const { input, textarea } = require('keys/dist/hh');

exports =
module.exports = (req, opt) => {
  const {
    selector,
    type,
  } = opt;

  if (exports[type]) {
    return exports[type](req, opt);
  }

  return input(selector || {}, R.omit(['selector'], opt));
};

exports.date = (req, opt) => {
  const {
    selector,
  } = opt;

  let value = '';

  if (opt.value) {
    value = moment.utc(opt.value).format('Y-MM-DD');
  }

  return input(
    selector || {},
    R.omit(['selector', 'value'], opt),
    { value },
  );
};

exports.textarea = (req, opt) => {
  const {
    selector,
    value,
  } = opt;

  return textarea(
    selector || {},
    R.omit(['selector', 'value'], opt),
    value,
  );
};

exports.checkbox = (req, opt) => {
  const {
    selector,
    default: defaultChecked,
  } = opt;

  let {
    checked,
    value,
  } = opt;

  if (checked === undefined) {
    checked = defaultChecked;
  }

  if (value === undefined || value === null) {
    value = 1;
  }

  return input(
    selector || {},

    R.omit([
      'selector',
      'default',
    ], opt),

    {
      value,
      checked: checked || null,
    }
  );
};
