const Qh = require('qhell');

const { table, tr, th, td } = require('keys/dist/hh');

module.exports = async (
  req,
  record = req.record,
  fieldSet = req.action.views.fieldSet(req, record),
) => {
  const fieldRows = await Qh.deepWhen(fieldSet.map(field => ({
    hidden: field.hidden,
    label: field.label && field.label(req, record),
    data: field.data(req, record),
  })));

  return table('.keysTable.keysDetailsTable',
    tr('.keysDetailsTable_headerRow',
      th('.keysTableHeader.keysDetailsTable_header', { colspan: 999 },
        'Detalhes',
      ),
    ),

    fieldRows.map(row => {
      const tRow = tr('.keysDetailsTable_dataRow',
        th('.keysDetailsTable_dataHeader', row.label),
        td('.keysDetailsTable_dataCell', row.data),
      );

      if (row.hidden) {
        tRow.classList.add('keysHidden');
      }

      return tRow;
    }),
  );
};
