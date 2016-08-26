const $ = require('jquery');

$(() => {
  $('body').on('click', '.keysAlert_dismissBtn', ev => {
    ev.preventDefault();

    $(ev.target).closest('.keysAlert').remove();
  });
});
