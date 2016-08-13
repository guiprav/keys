const $ = require('jquery');

module.exports = (type, content) => {
  $('.keysAlertsContainer').append(
    $('<div>')
      .addClass(`keysAlert keysAlert--${type}`)
      .append(
        $('<div>')
          .addClass('keysAlertContent')
          .append(content)
      )
      .append(
        $('<button>')
          .attr('type', 'button')
          .addClass('keysAlert_dismissBtn')
          .text('×')
      )
  );
};
