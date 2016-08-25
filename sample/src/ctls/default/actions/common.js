const R = require('ramda');

const views = require('sample/views');

exports.get = async (req, res) => {
  const { actionName, action } = req;

  // FIXME: Call action.prepare instead.
  if (action.load) {
    const loadTargetProp = (
      actionName === 'list' ? 'records' : 'record'
    );

    req[loadTargetProp] = await action.load(req);
  }

  const page = await action.views.render(req);

  res.send(page.outerHTML);
};

exports.views = Object.assign({}, views);
