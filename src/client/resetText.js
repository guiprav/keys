module.exports = $el => {
  const original = $el.attr('data-keys-original-text');

  if (!original) {
    return;
  }

  $el.text(original);
};
