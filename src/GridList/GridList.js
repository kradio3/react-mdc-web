import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const GridList = ({ className, children, ...otherProps }) => (
  <div
    className={classnames('mdc-grid-list', className)}
    {...otherProps}
  >
    <ul className="mdc-grid-list__tiles">
      {children}
    </ul>
  </div>
);

GridList.propTypes = propTypes;
export default GridList;

