import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  col: PropTypes.number,
};

const Cell = ({ className, children, col, name, ...otherProps }) => {
  console.log(children);
  return (
  <div
    className={classnames('mdc-layout-grid__cell', className, {
    [`mdc-layout-grid__cell--span-${col}`]: col })}
    {...otherProps}
  >
    {children}
  </div>
);
}
Cell.propTypes = propTypes;
export default Cell;






