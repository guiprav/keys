/* global location */
/* global confirm */

const $ = require('jquery');

const Keys = require('keys/client');

exports.clientScripts = {
  btnHref: () => $('body').on('click', 'button[data-keys-href]', ev => {
    ev.preventDefault();

    location.href = $(ev.target).attr('data-keys-href');
  }),

  btnAction: () => $('body').on('click', 'button[data-keys-action]', ev => {
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
      redirect: $btn.attr('data-keys-redirect'),
      dataType: $btn.attr('data-keys-params-data-type'),
      data,
    });
  }),

  disableSubmitBtn: () => $('body').on('submit', ev => {
    $(ev.target).find('[type="submit"]').attr('disabled', true);
  }),

  ajaxForm: () => $('body').on('submit', '.keysAjaxForm', ev => {
    ev.preventDefault();

    const $form = $(ev.target);

    Keys.stdAjax({
      url: $form.attr('action') ||
        `${location.pathname}${location.search}`,

      data: $form.serialize(),
    }).fail(() => {
      $form.find('[type="submit"]').removeAttr('disabled');
    });
  }),
};
