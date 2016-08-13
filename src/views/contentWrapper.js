const { div } = require('keys/hh');

exports = module.exports = content => div('.keysContentWrapper',
  content,
);

exports.styles = {
  wrapper: {
    select: '.keysContentWrapper',
    margin: '30px',
  },
};
