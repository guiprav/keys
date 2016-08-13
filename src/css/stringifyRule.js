const R = require('ramda');

const decamel = require('decamelize');

exports.stringifyRule = (name, props) => {
  let select = props.select;

  if (select) {
    if (R.is(Array, select)) {
      select = select.join(',\n');
    }

    props = R.omit(['select'], props);
  }
  else {
    select = `.${name}`;
  }

  return [
    `${select} {`,

    ...Object.keys(props).map(k => {
      const propName = decamel(k, '-');

      let propVal = props[k];

      if (R.is(Array, propVal)) {
        propVal = propVal.join(', ');
      }

      return `  ${propName}: ${propVal};`;
    }),

    '}',
  ].join('\n');
};
