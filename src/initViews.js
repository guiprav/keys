// TODO: Don't depend on LoDash for this.
const defaultsDeep = require('lodash/defaultsDeep');

const stockViews = require('./views');

module.exports = views => defaultsDeep(views, stockViews);
