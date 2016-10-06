/* global location */

const $ = require('jquery');

const Keys = require('keys/dist/client');

module.exports = opt => $.ajax(Object.assign(
  {}, opt, {
    type: opt.type || 'post',

    beforeSend: () => Keys.clearAlerts(),

    success: data => {
      const { redirect } = opt;

      switch (redirect || 'auto') {
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

        case 'auto':
          if (data.redirect) {
            location.href = data.redirect;
          }

          break;

        default:
          throw new Error(`Unknown redirect policy: ${redirect}`);
      }

      if (data.pushAlert) {
        const { color, message } = data.pushAlert;

        Keys.pushAlert(color || 'blue', message);
      }

      if (opt.success) {
        opt.success(data);
      }

      if (opt.always) {
        opt.always(data);
      }
    },

    error: xhr => {
      const data = xhr.responseJSON;

      if (!data || !data.userMsg) {
        Keys.flagServerError();
        return;
      }

      Keys.pushAlert('red', data.userMsg);

      if (opt.error) {
        opt.error(data, xhr);
      }

      if (opt.always) {
        opt.always(data);
      }
    },
  }
));
