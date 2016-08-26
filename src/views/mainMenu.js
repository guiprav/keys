const Q = require('q');

const { div } = require('keys/dist/hh');

module.exports = async req => {
  const { views } = req.action;

  const [
    mainMenuHeading,
    mainMenuList,
    mainMenuDetails,
  ] = await Q.all([
    views.mainMenuHeading(req),
    views.mainMenuList(req),
    views.mainMenuDetails(req),
  ]);

  return div('.keysMainMenu',
    mainMenuHeading,

    div('.keysMainMenu_sections',
      mainMenuList,
      mainMenuDetails,
    ),
  );
};
