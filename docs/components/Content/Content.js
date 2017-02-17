import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
};

const Content = ({ children, ...otherProps }) => (
  <div 
    style={{
      display: "flex",
      boxSizing: "border-box",
      flex: 1,
    }}
  >
    {children}
  </div>
);
Content.propTypes = propTypes;
export default Content;
