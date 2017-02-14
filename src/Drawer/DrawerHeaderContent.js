import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const DrawerHeaderContent = ({ className, children, ...otherProps }) => (
  <div
    className={classnames(
      'mdc-temporary-drawer__header-content',
      'mdc-theme--primary-bg',
      'mdc-theme--text-primary-on-primary',
      className)}
    {...otherProps}
  >
    {children}
  </div>
);
DrawerHeaderContent.propTypes = propTypes;
export default DrawerHeaderContent;
