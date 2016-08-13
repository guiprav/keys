exports.styles = {
  all: {
    select: '*',
    boxSizing: 'border-box',
  },

  anchors: {
    select: [
      'a',
      'a:link',
      'a:active',
      'a:visited',
    ],

    color: '#38678b',
  },

  keysHidden: {
    select: '.keysHidden',
    display: 'none',
  },

  keysTable: {
    select: '.keysTable',

    width: '100%',
    borderSpacing: 0,
    fontSize: 'inherit',
  },

  keysTableHeader: {
    select: '.keysTableHeader',

    border: '1px solid #cdcdcd',
    borderRight: 0,
    borderTopColor: '#dfdfdf',

    padding: '5px 15px',
    paddingTop: '6px',

    boxShadow: [
      '0 1px 3px rgba(0, 0, 0, 0.12)',
      '0 0 1px white inset',
    ],

    fontSize: '12px',

    textAlign: 'left',

    textShadow: 'white 0 1px 0',

    backgroundImage: 'linear-gradient(180deg, #efefef, #dfe1e2)',

    color: '#5e6469',
  },

  keysTableLastHeader: {
    select: '.keysTableHeader:last-child',
    borderRight: '1px solid #cdcdcd',
  },
};
