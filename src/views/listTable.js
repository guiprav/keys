const Q = require('q');
const Qh = require('qhell');

const { p, table, tr, th, td } = require('keys/dist/hh');

module.exports = async (
  req,
  records = req.records,
  fieldSet = req.action.views.fieldSet(req),
) => {
  if (!records.length) {
    return p('Sem registros.');
  }

  const headerLabels = await Q.all(fieldSet.map(
    field => field.label && field.label(req),
  ));

  const recordRows = await Qh.deepWhen(
    records.map(record => fieldSet.map(
      field => field.data(req, record),
    )),
  );

  return table('.keysTable.keysListTable',
    tr('.keysListTable_headerRow', headerLabels.map(
      label => th('.keysTableHeader.keysListTable_header', label),
    )),

    recordRows.map(cols => tr('.keysListTable_dataRow',
      cols.map(cell => td('.keysListTable_dataCell', cell)),
    )),
  );
};
