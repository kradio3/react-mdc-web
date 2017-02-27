import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Content from '../../../src/Content';

const propTypes = {
  children: PropTypes.node,
};

const AppContent = ({ children }) => (
  <Content 
    style={{
      display: "flex",
      boxSizing: "border-box",
      flex: 1,
    }}
  >
    {children}
  </Content>
);
AppContent.propTypes = propTypes;
export default AppContent;
