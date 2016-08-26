exports.signIn = {
  views: {
    heading: () => 'Entrar',

    render: req => req.action.views.adminAuthShell(req),
    content: req => req.action.views.signInBox(req),
  },

  submit: (req, res) => res.send({
    redirect: '/keys/user/list',
  }),
};

exports.signOut = {
  submit: (req, res) => res.send({
    redirect: '/keys/auth/signIn',
  }),
};
