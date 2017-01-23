import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  invalid: PropTypes.bool,
};

const ROOT = 'mdc-textfield';
const UPGRADED = `${ROOT}--upgraded`;
const DISABLED = `${ROOT}--disabled`;
const FOCUSED = `${ROOT}--focused`;
const INVALID = `${ROOT}--invalid`;

const Label = ({ disabled, focused, children, invalid }) => {
  const classes = {};
  classes[FOCUSED] = focused;
  classes[DISABLED] = disabled;
  classes[INVALID] = invalid;

  return (
    <label
      className={classnames(
        ROOT,
        UPGRADED,
        classes,
      )}
    >
      {children}
    </label>
  );
};
Label.propTypes = propTypes;
export default Label;
