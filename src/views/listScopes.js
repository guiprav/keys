const qs = require('qs');

const R = require('ramda');
const _ = require('lodash');

const { a, div } = require('keys/dist/hh');

module.exports = (
  req,
  scopeItems = req.action.views.listScopeItems(req),
) => div('.keysListScopes', scopeItems.map(item => {
  const itemQueryKeys = Object.keys(item.query);

  const match = itemQueryKeys.every(
    k => _.isEqual(item.query[k], req.query[k]),
  );

  const newQuery = (() => {
    if (!match) {
      return R.merge(req.query, item.query);
    }

    return R.omit(itemQueryKeys, req.query);
  })();

  const link = a('.keysListScopes_item', item.label, {
    href: `?${qs.stringify(newQuery)}`,
  });

  if (match) {
    link.classList.add('keysListScopes_item--active');
  }

  return link;
}));
