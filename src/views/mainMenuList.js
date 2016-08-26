const R = require('ramda');

const { ul, li, a } = require('keys/hh');

module.exports = async req => {
  const listItems = await req.action.views.mainMenuListItems(req);
    
  return ul('.keysMainMenu_list',
    listItems.map(
      item => li('.keysMainMenu_listItem',
        a('.keysMainMenu_listItemLink',
          R.pick(['href'], item), item.label,
        ),
      ),
    ),
  );
};
