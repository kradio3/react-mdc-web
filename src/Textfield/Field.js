import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  invalid: PropTypes.bool,
};

const ROOT = 'mdc-textfield';
const DISABLED = `${ROOT}--disabled`;
const FOCUSED = `${ROOT}--focused`;
const INVALID = `${ROOT}--invalid`;
const UPGRADED = `${ROOT}--upgraded`;

const Field = ({ className, focused, disabled, invalid, children }) => (
  <div
    className={classnames(ROOT, {
      [FOCUSED]: focused,
      [DISABLED]: disabled,
      [INVALID]: invalid,
    }, UPGRADED, className)}
  >
    {children}
  </div>
);
Field.propTypes = propTypes;
export default Field;
