import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  component: PropTypes.string,
  name: PropTypes.string.isRequired,
};

const defaultProps = {
  component: 'i',
};

const Icon = ({ className, component, name, ...otherProps }) => {
  const classes = classnames('material-icons', className);
  return React.createElement(component, {
    className: classes,
    ...otherProps,
  }, name);
};
Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
export default Icon;
