import React, { PropTypes } from 'react';
import classnames from 'classnames';

const ROOT = 'mdc-toolbar__title';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const ToolbarTitle = ({
  className,
  children,
  ...otherProps
}) => (
  <span
    className={classnames(ROOT, className)}
    {...otherProps}
  >
    {children}
  </span>
);
ToolbarTitle.propTypes = propTypes;
export default ToolbarTitle;

