const insert = require('insert-css');

const forEachObject = require('keys/forEachObject');

const { stringify } = require('.');

module.exports = views => forEachObject(obj => {
  if (!obj.styles) {
    return;
  }

  insert(stringify(obj.styles));

  return true;
}, views);
