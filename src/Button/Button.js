import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
  dense: PropTypes.bool,
  raised: PropTypes.bool,
};

const Button = ({
  children,
  className,
  compact,
  dense,
  raised,
  ...otherProps
}) => {
  const classes = classnames(
    'mdc-button', {
      'mdc-button--compact': compact,
      'mdc-button--dense': dense,
      'mdc-button--raised': raised,
    }, className);
  return (
    <button
      className={classes}
      {...otherProps}
    >
      {children}
    </button>
  );
};
Button.propTypes = propTypes;
export default Button;
