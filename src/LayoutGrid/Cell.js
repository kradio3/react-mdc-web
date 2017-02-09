import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  col: PropTypes.number,
  tablet: PropTypes.number,
  phone: PropTypes.number,
  order: PropTypes.number,
  top: PropTypes.bool,
  middle: PropTypes.bool,
  bottom: PropTypes.bool,
};

const Cell = ({ className, children, col, tablet, phone, order,
  top, middle, bottom, ...otherProps }) => (
    <div
      className={classnames('mdc-layout-grid__cell', className, {
        [`mdc-layout-grid__cell--span-${col}`]: col,
        [`mdc-layout-grid__cell--span-${tablet}-tablet`]: tablet,
        [`mdc-layout-grid__cell--span-${phone}-phone`]: phone,
        [`mdc-layout-grid__cell--order-${order}`]: order,
        'mdc-layout-grid__cell--align-top': top,
        'mdc-layout-grid__cell--align-middle': middle,
        'mdc-layout-grid__cell--align-bottom': bottom })}
      {...otherProps}
    >
      {children}
    </div>
  );
Cell.propTypes = propTypes;
export default Cell;

