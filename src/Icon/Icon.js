import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

const Icon = ({ className, name, ...otherProps }) => (
  <i
    className={classnames('material-icons', className)}
    {...otherProps}
  >
    {name}
  </i>
  );
Icon.propTypes = propTypes;
export default Icon;
