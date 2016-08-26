const { div } = require('keys/dist/hh');

const reIsSelectorExt = /^[#\.]./;

module.exports = (...args) => {
  let selector = '.keysProgress';

  {
    const selectorExt = args[0];

    if (typeof selectorExt === 'string' && reIsSelectorExt.test(selectorExt)) {
      args.shift();
      selector += selectorExt;
    }
  }

  return div(selector, ...args, div('.keysProgress_bar', {
    style: { width: 0 },
  }));
};
