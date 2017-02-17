import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Elevation from 'react-mdc-web/lib/Elevation';
import { colors, activeColors } from 'utils/colors'

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const Toolbar = ({ className, children, ...otherProps }) => (
  <Elevation
    style = {{
      zIndex: 2,
      width: '100%',
      height: '64px',
      lineHeight: '64px',
      padding: '0 16px',
      paddingLeft: '72px',
      boxSizing: 'border-box',
      zIndex: 2,
      background: colors.bg,
      color: colors.fg,
      display: 'block',
    }}
    z={4}
  >
    {children}
  </Elevation>
  );
Toolbar.propTypes = propTypes;
export default Toolbar;
