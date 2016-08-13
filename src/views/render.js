const views = require('.');

module.exports = async data => {
  data.recordType = views.recordTypes[data.recordTypeName];
  data.recordTypeAction = data.recordType[data.actionName];

  const { recordType, recordTypeAction } = data;

  if (recordTypeAction.prepare) {
    await recordTypeAction.prepare(data);
  }

  const dom = await (recordTypeAction.shell || views.shell)(data);

  return dom.outerHTML;
};
