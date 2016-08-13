const R = require('ramda');

const { div, ol, li, a, h2 } = require('keys/hh');

const views = require('.');

exports = module.exports = data => {
  const { recordTypeAction } = data;

  const contextHeaderBtns = (
    recordTypeAction.contextHeaderBtns || views.contextHeaderBtns
  );

  const crumbItems = (
    recordTypeAction.crumbItems || views.crumbItems
  );

  return div('.keysContextHeader',
    div('.keysContextHeader_btns', contextHeaderBtns(data)),

    ol('.keysContextHeader_crumbs',
      crumbItems(data).map(item => li('.keysContextHeader_crumbItem',
        a('.keysContextHeader_crumbItemLink',
          R.pick(['href'], item), item.label,
        )
      )),
    ),

    h2('.keysContextHeader_heading', recordTypeAction.heading(data)),
  );
};

exports.styles = {
  header: {
    select: '.keysContextHeader',

    borderBottom: '1px solid #eee',
    padding: '10px 30px',

    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.37)',

    backgroundImage: 'linear-gradient(180deg, #efefef, #dfe1e2)',

    textShadow: 'white 0 1px 0',

    color: '#5e6469',
  },

  btns: {
    select: '.keysContextHeader_btns',

    float: 'right',
    paddingTop: '18px',
  },

  crumbs: {
    select: '.keysContextHeader_crumbs',

    margin: 0,
    paddingLeft: 0,

    listStyleType: 'none',

    fontSize: '11px',

    textTransform: 'uppercase',
  },

  crumbs__beforeHeading: {
    select: '.keysContextHeader_crumbs + .keysContextHeader_heading',
    marginTop: '8px',
  },

  crumbItem__afterLastChild: {
    select: '.keysContextHeader_crumbItem:last-child:after',
    content: '" /"',
  },

  crumbLink__lav: {
    select: ['link', 'active', 'visited'].map(
      st => `.keysContextHeader_crumbLink:${st}`,
    ),

    color: '#8a949e',
    textDecoration: 'none',
  },

  crumbLink__h: {
    select: '.keysContextHeader_crumbItemLink:hover',
    textDecoration: 'underline',
  },

  heading: {
    select: '.keysContextHeader_heading',

    margin: 0,
    fontSize: '30px',
    color: 'inherit',
  },
};
