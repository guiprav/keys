const Q = require('q');

const { div, ul } = require('keys/hh');

module.exports = async req => {
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
