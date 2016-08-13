const $ = require('jquery');

const { div } = require('keys/hh');

exports = module.exports = () => div('.keysAlertsContainer');

exports.clientScripts = {
  closeBtn: () => $('body').on('click', '.keysAlert_dismissBtn', ev => {
    ev.preventDefault();

    $(ev.target).closest('.keysAlert').remove();
  }),
};
