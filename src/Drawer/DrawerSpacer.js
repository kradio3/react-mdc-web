import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const DrawerSpacer = ({ className, children, ...otherProps }) => (
  <div
    className={classnames('mdc-permanent-drawer__toolbar-spacer', className)}
    {...otherProps}
  >
    {children}
  </div>
  );
DrawerSpacer.propTypes = propTypes;
export default DrawerSpacer;
