import React, { PropTypes } from 'react';
import classnames from 'classnames';

const ROOT = 'mdc-textfield__input';
const propTypes = {
  disabled: PropTypes.bool,
};

const Input = ({ disabled, ...otherProps }) => (
  <input
    className={classnames(ROOT)}
    disabled={disabled}
    type="text"
    {...otherProps}
  />
);
Input.propTypes = propTypes;
export default Input;
