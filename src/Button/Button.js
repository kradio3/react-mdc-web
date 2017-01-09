import React, { PropTypes } from 'react';
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
  ...otherProps,
}) => (
  <button
    className={classnames(
      'mdc-button', {
        'mdc-button--accent': accent,
        'mdc-button--compact': compact,
        'mdc-button--dense': dense,
        'mdc-button--primary': primary,
        'mdc-button--raised': raised,
      }, className)}
    {...otherProps}
  >
    {children}
  </button>
);
Button.propTypes = propTypes;
export default Button;
