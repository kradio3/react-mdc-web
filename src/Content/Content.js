import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.string,
};

const defaultProps = {
  component: 'main',
};

const Content = ({
  className,
  children,
  component,
  ...otherProps
}) => {
  const classes = classnames('mdc-content', className);
  return React.createElement(component, {
    className: classes,
    ...otherProps,
  }, children);
};
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
export default Content;

