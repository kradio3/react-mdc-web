import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  focused: PropTypes.bool,
  children: PropTypes.node,
};

const ROOT = 'mdc-textfield__label';
const LABEL_FLOAT_ABOVE = `${ROOT}--float-above`;

const Span = ({ focused, children }) => {
  const classes = {};
  classes[LABEL_FLOAT_ABOVE] = focused;

  return (
    <span
      className={classnames(
        ROOT,
        classes,
      )}
    >
      {children}
    </span>
  );
};
Span.propTypes = propTypes;
export default Span;
