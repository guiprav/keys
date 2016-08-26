const Q = require('q');

const { div } = require('keys/dist/hh');

module.exports = async req => div('.keysContentWrapper',
  await Q.all([
    req.action.views.alertsContainer(req),
    req.action.views.content(req),
  ]),
);
