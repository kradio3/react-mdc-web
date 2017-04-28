import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import ROOT from './constants';

const propTypes = {
  className: PropTypes.string,
  component: PropTypes.string,
};

const defaultProps = {
  component: 'div',
};

const Typography = ({
  className,
  component,
  ...otherProps
}) => {
  const classes = classnames(ROOT, className);
  return React.createElement(component, {
    className: classes,
    ...otherProps,
  });
};
Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;
export default Typography;

