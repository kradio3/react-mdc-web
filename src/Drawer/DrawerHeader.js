import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  temporary: PropTypes.bool,
};

const DrawerHeader = ({ className, children, temporary, ...otherProps }) => (
  <header
    className={classnames({
      'mdc-temporary-drawer__header': temporary,
      'mdc-permanent-drawer__header': !temporary,
    },
      className,
    )}
    {...otherProps}
  >
    {children}
  </header>
);
DrawerHeader.propTypes = propTypes;
export default DrawerHeader;
