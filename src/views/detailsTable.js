const Qh = require('qhell');

const { table, tr, th, td } = require('keys/hh');

exports = module.exports = async data => {
  const { fields, record } = data;

  const fieldRows = await Qh.deepWhen(fields.map(field => ({
    label: field.label(record),
    ctrls: field.render(record),
  })));

  return table('.keysTable.keysDetailsTable',
    tr('.keysDetailsTable_headerRow',
      th('.keysTableHeader.keysDetailsTable_header', { colspan: 999 },
        'Detalhes',
      ),
    ),

    fieldRows.map(row => tr('.keysDetailsTable_dataRow',
      th('.keysDetailsTable_dataHeader', row.label),
      td('.keysDetailsTable_dataCell', row.ctrls),
    )),
  );
};

exports.styles = {
  table: {
    select: '.keysDetailsTable',
    backgroundColor: '#f4f4f4',
  },

  dataHeaderAndCell: {
    select: [
      '.keysDetailsTable_dataHeader',
      '.keysDetailsTable_dataCell',
    ],

    borderBottom: '1px solid #e8e8e8',
    padding: '9px 15px',
  },

  dataHeader: {
    select: '.keysDetailsTable_dataHeader',

    width: '150px',

    borderLeft: '1px solid #e8e8e8',

    textAlign: 'left',

    fontWeight: 'inherit',
    textTransform: 'uppercase',

    color: '#5e6469',
    textShadow: 'white 0 1px 0',
  },

  dataCell: {
    select: '.keysDetailsTable_dataCell',
    borderRight: '1px solid #e8e8e8',
  },
};
