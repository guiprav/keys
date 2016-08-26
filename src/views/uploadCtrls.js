const { button, div, input } = require('keys/dist/hh');

exports =
module.exports = (req, {
  selector = '',
  name,
  value,
  required,
  btnLabel = 'Escolher arquivo',
  accept = null,
  uploadEndpoint,
}) => div(`.keysUploadCtrls${selector}`,
  {
    'data-keys-accept': accept,
    'data-keys-upload-endpoint': uploadEndpoint,
  },

  button('.keysUploadBtn', { type: 'button' }, btnLabel),

  req.action.views.progressBar(),

  input({
    type: 'hidden',
    name,
    value: value || null,
    required: required || null,
  }),
);
