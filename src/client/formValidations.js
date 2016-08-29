const $ = require('jquery');

const Keys = require('keys/dist/client');

$(() => {
  $('body').on('click', '[type="submit"]', ev => {
    const $btn = $(ev.target);
    const $form = $btn.closest('form');

    Keys.clearFieldErrors($form);

    $form.find('[required]').each((i, el) => {
      const $el = $(el);

      if (!$el.val()) {
        ev.preventDefault();
        Keys.flagFieldError($el, 'Preenchimento obrigatório.');
      }
    });

    $form.find('[type="email"]').each((i, el) => {
      const $el = $(el);
      const val = $el.val();

      const re = /^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z0-9_\-]+$/;

      if (val && !re.test(val)) {
        ev.preventDefault();
        Keys.flagFieldError($el, 'E-mail inválido.');
      }
    });
  });
});
