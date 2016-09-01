const qs = require('qs');

const R = require('ramda');

const { a, div } = require('keys/dist/hh');

module.exports = (
  req,
  scopeItems = req.action.views.listScopeItems(req),
) => div('.keysListScopes', scopeItems.map(item => {
  let newQuery;

  if (!item.query) {
    newQuery = R.merge(req.query, {
      [item.name]: (req.query[item.name] ? undefined : 1),
    });
  } else {
    newQuery = item.query(req);
  }

  const link = a('.keysListScopes_item', item.label, {
    href: `?${qs.stringify(newQuery)}`,
  });

  if (!newQuery[item.name]) {
    link.classList.add('keysListScopes_item--active');
  }

  return link;
}));
