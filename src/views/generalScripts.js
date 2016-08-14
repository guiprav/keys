const $ = require('jquery');

exports.clientScripts = {
  dataHrefButtonClick: () =>
    $('body').on('click', 'button[data-href]', ev => {
      ev.preventDefault();
      location.href = $(ev.target).attr('data-href');
    }),
};
