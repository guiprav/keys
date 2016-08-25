const { div } = require('keys/hh');

exports = module.exports = async req => div('.keysContentWrapper',
  await req.action.views.content(req),
);

exports.styles = {
  wrapper: {
    select: '.keysContentWrapper',
    margin: '30px',
  },
};
