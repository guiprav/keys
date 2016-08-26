const { div } = require('keys/hh');

module.exports = async req => div('.keysContentWrapper',
  await req.action.views.content(req),
);
