import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  col: PropTypes.number,
  tablet: PropTypes.number,
  phone: PropTypes.number,
};

const Cell = ({ className, children, col, tablet, phone, name, ...otherProps }) => {
  console.log(children);
  return (
  <div
    className={classnames('mdc-layout-grid__cell', className, {
      [`mdc-layout-grid__cell--span-${col}`]: col,
      [`mdc-layout-grid__cell--span-${tablet}-tablet`]: tablet,
      [`mdc-layout-grid__cell--span-${phone}-phone`]: phone})}
    {...otherProps}
  >
    {children}
  </div>
);
}
Cell.propTypes = propTypes;
export default Cell;






