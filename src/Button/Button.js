import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  accent: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
  dense: PropTypes.bool,
  primary: PropTypes.bool,
  raised: PropTypes.bool,
};

const Button = ({
  accent,
  children,
  className,
  compact,
  dense,
  primary,
  raised,
  ...otherProps
}) => {
  const classes = classnames(
    'mdc-button', {
      'mdc-button--accent': accent,
      'mdc-button--compact': compact,
      'mdc-button--dense': dense,
      'mdc-button--primary': primary,
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
