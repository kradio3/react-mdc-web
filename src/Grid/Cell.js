import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import isDefined from '../utils/isDefined';

const propTypes = {
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),
  className: PropTypes.string,
  col: PropTypes.number,
  order: PropTypes.number,
  phone: PropTypes.number,
  tablet: PropTypes.number,
};

const ROOT = 'mdc-layout-grid__cell';

const Cell = ({
  align,
  className,
  col,
  order,
  phone,
  tablet,
  ...otherProps
}) => (
  <div
    className={classnames(ROOT, {
      [`${ROOT}--span-${col}`]: isDefined(col),
      [`${ROOT}--span-${tablet}-tablet`]: isDefined(tablet),
      [`${ROOT}--span-${phone}-phone`]: isDefined(phone),
      [`${ROOT}--order-${order}`]: isDefined(order),
      [`${ROOT}--align-${align}`]: isDefined(align),
    }, className)}
    {...otherProps}
  />
);
Cell.propTypes = propTypes;
export default Cell;

