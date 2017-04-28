import PropTypes from 'prop-types';
import React, { Children, cloneElement } from 'react';
import List from '../List/List';
import ListItem from '../List/ListItem';
import FormField from '../FormField';
import Radio from './Radio';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf((propValue, key, componentName) => {
    const { type } = propValue[key];
    if (type !== Radio) {
      return new Error(`Invalid prop 'children[${key}]' supplied to '${componentName}', expected 'Radio'`);
    }
    return false;
  }),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const RadioGroup = ({ className, name, onChange, value, ...otherProps }) => {
  const childs = Children.map(otherProps.children, (child) => {
    const { id, children, value: childValue } = child.props;
    const customId = id || `radio-${name || ''}-${childValue}`;
    const radio = cloneElement(child, {
      checked: childValue === value,
      id: customId,
      name,
      onChange,
    });
    return (
      <ListItem>
        <FormField id={customId}>
          {radio}
          <label>{children}</label>
        </FormField>
      </ListItem>
    );
  });
  return (
    <List className={className}>
      {childs}
    </List>
  );
};
RadioGroup.propTypes = propTypes;
export default RadioGroup;
