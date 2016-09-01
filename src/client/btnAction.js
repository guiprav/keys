/* global confirm */

const $ = require('jquery');

const Keys = require('keys/dist/client');

$(() => {
  $('body').on('click', 'button[data-keys-action]', ev => {
    ev.preventDefault();

    const $btn = $(ev.target);

    {
      const confirmationQuestion = $btn.attr('data-keys-confirm');

      if (confirmationQuestion && !confirm(confirmationQuestion)) {
        return;
      }
    }

    const data = JSON.parse($btn.attr('data-keys-json') || '{}');

    Keys.stdAjax({
      type: $btn.attr('data-keys-method'),
      url: $btn.attr('data-keys-action'),
      redirect: $btn.attr('data-keys-redirect') || 'follow',
      dataType: $btn.attr('data-keys-params-data-type'),
      data,
    });
  });
});
