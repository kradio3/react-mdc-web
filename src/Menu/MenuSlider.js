import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import ScaledComponent from './ScaledComponent';

const ROOT = 'mdc-menu';
const ANIMATING = `${ROOT}--animating`;
const OPEN = `${ROOT}--open`;
const TOPLEFT = `${OPEN}-from-top-left`;
const TOPRIGHT = `${OPEN}-from-top-right`;
const BOTTOMLEFT = `${OPEN}-from-bottom-left`;
const BOTTOMRIGHT = `${OPEN}-from-bottom-right`;

const propTypes = {
  animation: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  open: PropTypes.bool,
  right: PropTypes.bool,
  style: PropTypes.object,
};

const MenuSlider = ({
  animation,
  bottom,
  children,
  className,
  open,
  right,
  style,
  ...otherProps
}) => {
  const classes = classnames(ROOT, {
    [ANIMATING]: animation,
    [TOPLEFT]: !bottom && !right,
    [TOPRIGHT]: !bottom && right,
    [BOTTOMLEFT]: bottom && !right,
    [BOTTOMRIGHT]: bottom && right,
    [OPEN]: open,
  }, className);
  const horizontal = right ? 'right' : 'left';
  const vertical = bottom ? 'bottom' : 'top';
  return (
    <div
      className={classes}
      role="menuitem"
      style={{ [horizontal]: 0, [vertical]: 0, ...style }}
      {...otherProps}
    >
      {children}
    </div>
  );
};
MenuSlider.propTypes = propTypes;
export default ScaledComponent(MenuSlider);
