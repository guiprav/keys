const Q = require('q');
const Qh = require('qhell');

const { table, tr, th, td } = require('keys/hh');

exports = module.exports = async data => {
  const { fields, records } = data;

  const headerLabels = await Q.all(fields.map(
    field => field.label(),
  ));

  const recordRows = await Qh.deepWhen(
    records.map(record => fields.map(
      field => field.render(record),
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

exports.styles = {
  oddDataRow: {
    select: '.keysListTable_dataRow:nth-child(odd)',
    backgroundColor: 'rgb(244, 245, 245)',
  },

  dataCell: {
    select: '.keysListTable_dataCell',

    borderBottom: '1px solid #e8e8e8',
    padding: '9px 15px',
  },
};
