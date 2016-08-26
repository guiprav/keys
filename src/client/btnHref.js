/* global location */

const $ = require('jquery');

$(() => {
  $('body').on('click', 'button[data-keys-href]', ev => {
    ev.preventDefault();

    location.href = $(ev.target).attr('data-keys-href');
  });
});
