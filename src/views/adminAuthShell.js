const Q = require('q');

const { html, body } = require('keys/hh');

module.exports = async req => {
  const { views } = req.action;

  const [
    head,
    alertsContainer,
    content,
  ] = await Q.all([
    views.head(req),
    views.alertsContainer(req),
    views.content(req),
  ]);

  return html(
    head,

    body('.keysShell_body.keysAdminAuthShell_body',
      alertsContainer,
      content,
    ),
  );
};
