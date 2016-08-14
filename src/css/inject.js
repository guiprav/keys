const insert = require('insert-css');

const forEachObject = require('keys/forEachObject');

const views = require('keys/views');

const { stringify } = require('.');

forEachObject(obj => {
  if (!obj.styles) {
    return;
  }

  insert(stringify(obj.styles));

  return true;
}, views);
