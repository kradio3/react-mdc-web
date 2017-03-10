import React, { PropTypes } from 'react';
import classnames from 'classnames';
import {Toolbar} from '../../../src/Toolbar';
import { colors, activeColors } from 'utils/colors'

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const AppToolbar = ({ className, children, ...otherProps }) => (
  <Toolbar
    fixed
    style = {{
      padding: '0 16px',
      paddingLeft: '72px',
      boxSizing: 'border-box',
    }}
  >
    {children}
  </Toolbar>
);
AppToolbar.propTypes = propTypes;
export default AppToolbar;
