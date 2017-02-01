import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const Spacer = ({ className, children, ...otherProps }) => (
  <div
    className={classnames('mdc-permanent-drawer__toolbar-spacer', className)}
    {...otherProps}
  >
    {children}
  </div>
  );
Spacer.propTypes = propTypes;
export default Spacer;
