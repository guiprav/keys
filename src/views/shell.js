const { html, body } = require('keys/hh');

const views = require('.');

exports = module.exports = async data => {
  const { recordTypeAction } = data;

  return html(
    views.head(data),
    views.mainMenu(data),

    body('.keysShell_body',
      (recordTypeAction.contextHeader || views.contextHeader)(data),

      (recordTypeAction.contentWrapper || views.contentWrapper)(
        await (recordTypeAction.content || views.content)(data),
      ),
    ),
  );
};

exports.styles = {
  keysShell_body: {
    flexDirection: 'column',

    minHeight: '100vh',
    margin: 0,

    fontFamily: ['Helvetica', 'sans-serif'],
    fontSize: '11px',
  },
};
