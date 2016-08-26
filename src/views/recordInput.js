const R = require('ramda');

exports = module.exports = (req, opt) => {
  const {
    type,
    name,
    record,
  } = opt;

  if (exports[type]) {
    return exports[type](req, opt);
  }

  return req.action.views.input(req, {
    ...R.omit(['record'], opt),
    value: record[name],
  });
};

exports.checkbox = (req, opt) => req.action.views.input(req, {
  ...R.omit(['record'], opt),
  value: opt.record[opt.name] || null,
  checked: opt.record[opt.name],
});
