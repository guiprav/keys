const R = require('ramda');

const { ul, li, a } = require('keys/hh');

exports = module.exports = req => ul('.keysMainMenu_list',
  (req.mainMenuItems || []).map(
    item => li('.keysMainMenu_listItem',
      a('.keysMainMenu_listItemLink',
        R.pick(['href'], item), item.label,
      ),
    ),
  ),
);

exports.styles = {
  keysMainMenu_list: {
    display: 'flex',

    margin: 0,
    paddingLeft: 0,

    listStyleType: 'none',
  },

  keysMainMenu_listItemLink: {
    display: 'block',

    margin: '7px 4px',

    borderRadius: '10px',

    padding: '0 10px',
    paddingTop: '4px',
    paddingBottom: '3px',
  },

  keysMainMenu_listItemLink__lav: {
    select: ['link', 'active', 'visited'].map(
      st => `.keysMainMenu_listItemLink:${st}`,
    ),

    color: 'inherit',
    textDecoration: 'none',
  },

  keysMainMenu_listItemLink__h: {
    select: '.keysMainMenu_listItemLink:hover',

    backgroundColor: '#7b8389',
    color: 'white',
  },
};
