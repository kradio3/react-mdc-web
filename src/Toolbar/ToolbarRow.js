import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const ROOT = 'mdc-toolbar__row';

const ToolbarRow = ({ className, children, ...otherProps }) => (
  <div
    className={classnames(ROOT, className)} {...otherProps}
  >
    {children}
  </div>
);
ToolbarRow.propTypes = propTypes;
export default ToolbarRow;

