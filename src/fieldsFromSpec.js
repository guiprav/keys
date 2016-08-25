module.exports = (req, record, fields, actionName, fieldNames) =>
  fieldNames.map(
    fieldName => {
      const spec = fields[fieldName](req, record);

      const variant = spec[`$${actionName}`];

      if (variant) {
        return variant;
      }

      switch (actionName) {
        case 'list':
          return spec.$view;

        case 'create':
          return spec.$create;

        default:
          throw new Error(
            `No suitable field spec variant for '${actionName}'`
          );
      }
    },
  );
