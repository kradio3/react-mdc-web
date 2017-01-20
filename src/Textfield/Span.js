import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  focused: PropTypes.bool,
  value: PropTypes.string,
};

const ROOT = 'mdc-textfield__label';
const LABEL_FLOAT_ABOVE = `${ROOT}--float-above`;

const Span = ({ focused, children, value }) => {
  const classes = {};
  classes[LABEL_FLOAT_ABOVE] = focused || value;

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
