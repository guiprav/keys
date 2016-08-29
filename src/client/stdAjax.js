/* global location */

const $ = require('jquery');

const Keys = require('keys/dist/client');

module.exports = opt => $.ajax(Object.assign(
  {}, opt, {
    type: opt.type || 'post',

    beforeSend: () => Keys.clearAlerts(),

    success: data => {
      const { redirect } = opt;

      switch (redirect || 'follow') {
        case 'ignore':
          break;

        case 'refresh-instead':
          location.reload();
          break;

        case 'follow':
          if (!data.redirect) {
            console.error('Missing redirect property:', data);
            Keys.flagServerError();

            return;
          }

          location.href = data.redirect;

          break;
      }
    },

    error: xhr => {
      const data = xhr.responseJSON;

      if (!data || !data.userMsg) {
        Keys.flagServerError();
        return;
      }

      Keys.pushAlert('red', data.userMsg);
    },
  }
));
