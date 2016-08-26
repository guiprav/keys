const moment = require('moment');

module.exports = (req, ts, fmt = 'lll') => moment(ts).format(fmt);
