const { h1 } = require('keys/hh');

const views = require('.');

exports = module.exports = () => h1('.keysMainMenu_heading',
  views.appTitle(),
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
