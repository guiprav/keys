const insert = require('insert-css');

const views = require('keys/views');

const { stringify } = require('.');

(function recurse (node) {
  if (!node) {
    return;
  }

  if (!node.styles) {
    Object.keys(node).forEach(k => recurse(node[k]));
  }
  else {
    insert(stringify(node.styles));
  }
})(views);
