const { form, input, button } = require('keys/dist/hh');

module.exports = () => form('.keysAjaxForm.keysSignInBox',
  { method: 'post' },

  input('.keysSignInBox_loginInput', {
    type: 'text',
    name: 'login',
    placeholder: 'Login',
  }),

  input('.keysSignInBox_passwordInput', {
    type: 'password',
    name: 'password',
    placeholder: 'Senha',
  }),

  button('.keysSignInBox_loginBtn', 'Entrar', {
    type: 'submit',
  }),
);
