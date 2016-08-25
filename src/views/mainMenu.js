const { div, ul } = require('keys/hh');

exports = module.exports = req => div('.keysMainMenu',
  req.views.mainMenuHeading(req),
  req.views.mainMenuList(req),
);

exports.styles = {
  keysMainMenu: {
    display: 'flex',

    borderBottom: '1px solid #44484b',

    fontSize: '12px',

    backgroundImage: 'linear-gradient(180deg, #6a7176, #4d5256)',

    color: '#cdcdcd',
    textShadow: 'black 0 1px 0',
  },
};
