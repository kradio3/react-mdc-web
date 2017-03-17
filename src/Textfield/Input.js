import React, { PropTypes } from 'react';
import classnames from 'classnames';

const ROOT = 'mdc-textfield__input';
const propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
};

const Input = ({ disabled, id, ...otherProps }) => (
  <input
    className={classnames(ROOT)}
    disabled={disabled}
    type="text"
    id={id}
    {...otherProps}
  />
);
Input.propTypes = propTypes;
export default Input;
