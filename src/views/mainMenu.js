const Q = require('q');

const { div, ul } = require('keys/hh');

exports = module.exports = async req => {
  const { views } = req.action;

  const [
    mainMenuHeading,
    mainMenuList,
  ] = await Q.all([
    views.mainMenuHeading(req),
    views.mainMenuList(req),
  ]);

  return div('.keysMainMenu',
    mainMenuHeading,
    mainMenuList,
  );
};

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
