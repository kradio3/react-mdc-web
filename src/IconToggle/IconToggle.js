import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  accent: PropTypes.bool,
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
};

const ROOT = 'mdc-icon-toggle';

const IconToggle = ({
  accent,
  children,
  className,
  disabled,
  primary,
  ...otherProps
}) => (
  <i
    className={classnames(ROOT, {
      [`${ROOT}--accent`]: accent,
      [`${ROOT}--disabled`]: disabled,
      [`${ROOT}--primary`]: primary,
    }, className)}
    role="button"
    {...otherProps}
  >
    {children}
  </i>
);
IconToggle.propTypes = propTypes;
export default IconToggle;
