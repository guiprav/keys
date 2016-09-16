/* global location */

const $ = require('jquery');

const Keys = require('keys/dist/client');

$(() => {
  $('body').on('submit', '.keysAjaxForm', ev => {
    ev.preventDefault();

    const $form = $(ev.target);
    const $formClone = $form.clone();

    $formClone.find('[type="checkbox"]:not(:checked)').each(function () {
      const $this = $(this);

      let uncheckedValue = $this.attr('data-keys-unchecked-value');

      if (uncheckedValue === undefined) {
        uncheckedValue = false;
      }

      $(this).val(uncheckedValue).prop('checked', true);
    });

    $formClone.find('[type="checkbox"]:disabled').prop('disabled', false);

    Keys.stdAjax({
      redirect: 'follow',

      url: $form.attr('action') ||
        `${location.pathname}${location.search}`,

      data: $formClone.serialize(),
    }).fail(() => {
      $form.find('[type="submit"]').removeAttr('disabled');
    });
  });
});
