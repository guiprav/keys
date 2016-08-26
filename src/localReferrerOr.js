module.exports = (req, href) => {
  const referrer = req.get('referrer');

  // TODO: Do a precise check.
  if (referrer && referrer.includes(`://${req.hostname}`)) {
    return referrer;
  }

  return href;
};
