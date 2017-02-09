import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const Grid = ({ className, children, ...otherProps }) => (
  <div
    className={classnames('mdc-layout-grid', className)}
    {...otherProps}
  >
    {children}
  </div>
  );
Grid.propTypes = propTypes;
export default Grid;

