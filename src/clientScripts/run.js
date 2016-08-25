const $ = require('jquery');

const forEachObject = require('keys/forEachObject');

module.exports = views => $(() => forEachObject(obj => {
  if (!obj.clientScripts) {
    return;
  }

  Object.keys(obj.clientScripts).forEach(
    k => obj.clientScripts[k](),
  );

  return true;
}, views));
