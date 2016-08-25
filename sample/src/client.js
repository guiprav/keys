const $ = require('jquery');

const injectCss = require('keys/css/inject');
const runScripts = require('keys/clientScripts/run');

const views = require('sample/views');

injectCss(views);

$(() => runScripts(views));
