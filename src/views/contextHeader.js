const R = require('ramda');
const Q = require('q');

const { div, ol, li, a, h2 } = require('keys/dist/hh');

module.exports = async req => {
  const { views } = req.action;

  const [
    crumbItems,
    contextHeaderBtns,

    heading,
  ] = await Q.all([
    views.crumbItems(req),
    views.contextHeaderBtns(req),

    views.heading(req),
  ]);

  return div('.keysContextHeader',
    div('.keysContextHeader_btns', contextHeaderBtns),

    ol('.keysContextHeader_crumbs',
      crumbItems.map(item => li('.keysContextHeader_crumbItem',
        a('.keysContextHeader_crumbItemLink',
          R.pick(['href'], item), item.label,
        )
      )),
    ),

    h2('.keysContextHeader_heading', heading),
  );
};
