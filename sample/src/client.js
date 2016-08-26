const $ = require('jquery');

const runScripts = require('keys/dist/client/runScripts');

const views = require('sample/views');

$(() => runScripts(views));
