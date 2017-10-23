import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  menu: PropTypes.bool,
};

const ToolbarIcon = ({
  className,
  children,
  menu,
  ...otherProps
}) => (
  <span
    className={classnames(menu ? 'mdc-toolbar__menu-icon' : 'mdc-toolbar__icon', className)}
    {...otherProps}
  >
    {children}
  </span>
);
ToolbarIcon.propTypes = propTypes;
export default ToolbarIcon;

