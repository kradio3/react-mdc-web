import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onWidthChange: PropTypes.func,
};

const Tile = ({
  className,
  onWidthChange,
  ...otherProps
}) => (
  <li
    className={classnames('mdc-grid-tile', className)}
    ref={(native) => {
      if (native && onWidthChange) {
        onWidthChange(native.offsetWidth);
      }
    }}
    {...otherProps}
  />
);

Tile.propTypes = propTypes;
export default Tile;

