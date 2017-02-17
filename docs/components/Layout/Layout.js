import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
};

const Layout = ({ children, ...otherProps }) => (
  <div 
    className='mdc-typography'
    style={{
      display: 'flex',
      flexDirection:'column',
      boxSizing: 'border-box',
      minHeight: '100%',
    }}
  >
    {children}
  </div>
);
Layout.propTypes = propTypes;
export default Layout;
