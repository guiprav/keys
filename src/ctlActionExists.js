module.exports = (ctls, ctlName, actionName) => {
  const ctl = ctls[ctlName];
  const action = ctl && ctl.actions[actionName];

  return !!action;
};
