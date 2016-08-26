/* global location */

const $ = require('jquery');

const Keys = require('keys/dist/client');

$(() => {
  $('body').on('submit', '.keysAjaxForm', ev => {
    ev.preventDefault();

    const $form = $(ev.target);

    Keys.stdAjax({
      url: $form.attr('action') ||
        `${location.pathname}${location.search}`,

      data: $form.serialize(),
    }).fail(() => {
      $form.find('[type="submit"]').removeAttr('disabled');
    });
  });
});
