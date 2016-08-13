module.exports = ($el, text) => {
  if (!$el.attr('data-keys-original-text')) {
    $el.attr('data-keys-original-text', $el.text());
  }

  $el.text(text);
};
