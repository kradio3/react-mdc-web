import React, { PropTypes } from 'react';
import Permanent from './Permanent';
import Temporary from './Temporary';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  permanent: PropTypes.bool,
};

const Drawer = ({ className, children, permanent, ...otherProps }) => (
  permanent ? (
    <Permanent
      className={className}
      {...otherProps}
    >
      {children}
    </Permanent>
  ) : (<Temporary
    className={className}
    {...otherProps}
  >
    {children}
  </Temporary>
  )

);
Drawer.propTypes = propTypes;
export default Drawer;
