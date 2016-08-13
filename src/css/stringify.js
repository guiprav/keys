const { stringifyRule } = require('.');

module.exports = ruleSet => Object.keys(ruleSet).reduce(
  (out, k) => out + stringifyRule(k, ruleSet[k]) + '\n', ''
);
