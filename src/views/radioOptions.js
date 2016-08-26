const { div, input, label } = require('keys/dist/hh');

function firstKey(obj) {
  return Object.keys(obj)[0];
}

module.exports = (req, {
  selector = '',
  name,
  opts,
  checked = firstKey(opts),
}) => div(`.keysRadioOptions${selector}`,
  Object.keys(opts).map(value => label(
    // TODO: Consider using req.action.views.input here.
    input({
      type: 'radio',
      checked: (checked === value) ? 'checked' : null,
      name,
      value,
    }),

    opts[value],
  )),
);
