const $ = require('jquery');

$(() => {
  $('body').on('submit', ev => {
    $(ev.target).find('[type="submit"]').attr('disabled', true);
  });
});
