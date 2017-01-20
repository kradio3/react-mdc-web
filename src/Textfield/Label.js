import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

const ROOT = 'mdc-textfield';
const UPGRADED = `${ROOT}--upgraded`;
const DISABLED = `${ROOT}--disabled`;
const FOCUSED = `${ROOT}--focused`;
// const INVALID = `${ROOT}--invalid`;

const Label = ({ disabled, focused, children }) => {
  const classes = {};
  classes[FOCUSED] = focused;
  classes[DISABLED] = disabled;

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
