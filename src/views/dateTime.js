const moment = require('moment');

module.exports = (req, ts, fmt = 'lll') => {
  if (!ts) {
    return 'N/A';
  }

  return moment(ts).format(fmt);
};
