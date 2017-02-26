import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.string,
  fixedToolbar: PropTypes.bool,
};

const Content = ({
  className,
  children,
  component,
  fixedToolbar,
  ...otherProps
}) => {
  const classes = classnames({ 'mdc-toolbar__fixed-adjust': fixedToolbar }, className);
  return React.createElement(component || 'main', {
    className: classes,
    ...otherProps,
  }, children);
};
Content.propTypes = propTypes;
export default Content;

