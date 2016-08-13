const $ = require('jquery');

module.exports = ($el, msg) => {
  if ($el.is('.keysFieldError')) {
    return;
  }

  $el.addClass('keysFieldError').after(
    $('<span>').addClass('keysFieldErrorMsg').text(msg)
  );
};
