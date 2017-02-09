import React, { PropTypes } from 'react';
import classnames from 'classnames';
import isDefined from '../utils/isDefined';

const propTypes = {
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),
  children: PropTypes.node,
  className: PropTypes.string,
  col: PropTypes.number,
  desktop: PropTypes.number,
  order: PropTypes.number,
  phone: PropTypes.number,
  tablet: PropTypes.number,
};

const ROOT = 'mdc-layout-grid__cell';

const Cell = ({
  align,
  children,
  className,
  col,
  desktop,
  order,
  phone,
  tablet,
  ...otherProps
}) => (
  <div
    className={classnames(ROOT, {
      [`${ROOT}--span-${col}`]: isDefined(col),
      [`${ROOT}--span-${desktop}-desktop`]: isDefined(desktop),
      [`${ROOT}--span-${tablet}-tablet`]: isDefined(tablet),
      [`${ROOT}--span-${phone}-phone`]: isDefined(phone),
      [`${ROOT}--order-${order}`]: isDefined(order),
      [`${ROOT}--align-${align}`]: isDefined(align),
    }, className)}
    {...otherProps}
  >
    {children}
  </div>
);
Cell.propTypes = propTypes;
export default Cell;

