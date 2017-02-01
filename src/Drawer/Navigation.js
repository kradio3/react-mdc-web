import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const Navigation = ({ className, children, ...otherProps }) => (
  <nav
    className={classnames('mdc-list', className)}
    {...otherProps}
  >
    {children}
  </nav>
  );
Navigation.propTypes = propTypes;
export default Navigation;
