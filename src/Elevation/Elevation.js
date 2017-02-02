import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  transition: PropTypes.bool,
  z: PropTypes.number,
};


const Elevation = ({ className, children, z, transition, ...otherProps }) => (
  <div
    className={classnames(`mdc-elevation--z${z}`, className, {
      'mdc-elevation-transition': transition,
    })}
    {...otherProps}
  >
    {children}
  </div>
  );
Elevation.propTypes = propTypes;
export default Elevation;
