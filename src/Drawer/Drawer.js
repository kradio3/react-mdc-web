import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const Drawer = ({ className, children, ...otherProps }) => (
  <nav
    className={classnames('mdc-permanent-drawer', className)}
    {...otherProps}
  >
    <div
      className="mdc-permanent-drawer__content"
    >
      {children}
    </div>
  </nav>

);
Drawer.propTypes = propTypes;
export default Drawer;
