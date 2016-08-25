const { h1 } = require('keys/hh');

exports = module.exports = req => h1('.keysMainMenu_heading',
  req.action.views.appTitle(req),
);

exports.styles = {
  heading: {
    select: '.keysMainMenu_heading',

    margin: 0,

    padding: '0 30px',
    paddingTop: '11px',
    paddingBottom: '10px',

    fontSize: 'inherit',
    fontWeight: 'inherit',
  },
};
