module.exports = $el => {
  $el.find('.keysFieldError').removeClass('keysFieldError');
  $el.find('.keysFieldErrorMsg').remove();
};
