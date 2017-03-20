import React from 'react';
import classnames from 'classnames';

const ROOT = 'mdc-textfield__input';

const Input = ({ ...props }) => (
  <input
    className={classnames(ROOT)}
    {...props}
  />
);
export default Input;
