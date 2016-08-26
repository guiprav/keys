const $ = require('jquery');

const runScripts = require('keys/clientScripts/run');

const views = require('sample/views');

$(() => runScripts(views));
