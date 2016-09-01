/* global location */

const $ = require('jquery');

const Keys = require('keys/dist/client');

$(() => {
  $('body').on('submit', '.keysAjaxForm', ev => {
    ev.preventDefault();

    const $form = $(ev.target).clone();
    const $formClone = $form.clone();

    $formClone.find('[type="checkbox"]:not(:checked)').each(function () {
      const $this = $(this);

      let uncheckedValue = $this.attr('data-keys-unchecked-value');

      if (uncheckedValue === undefined) {
        uncheckedValue = 0;
      }

      $(this).val(uncheckedValue).prop('checked', true);
    });

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
