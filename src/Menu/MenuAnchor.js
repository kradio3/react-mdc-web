import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const MenuAnchor = ({ children, className, ...otherProps }) => (
  <div
    className={classnames('mdc-menu-anchor', className)}
    {...otherProps}
  >
    {children}
  </div>
  );
MenuAnchor.propTypes = propTypes;
export default MenuAnchor;
