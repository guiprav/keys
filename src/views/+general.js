const $ = require('jquery');

exports.clientScripts = {
  btnHref: () => $('body').on('click', 'button[data-keys-href]', ev => {
    ev.preventDefault();

    location.href = $(ev.target).attr('data-keys-href');
  }),
};
