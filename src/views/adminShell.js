const Q = require('q');

const { html, body } = require('keys/hh');

module.exports = async req => {
  const { views } = req.action;

  const [
    head,
    mainMenu,
    contextHeader,
    contentWrapper,
  ] = await Q.all([
    views.head(req),
    views.mainMenu(req),
    views.contextHeader(req),
    views.contentWrapper(req),
  ]);

  return html(
    head,
    mainMenu,

    body('.keysShell_body.keysAdminShell_body',
      contextHeader,
      contentWrapper,
    ),
  );
};
