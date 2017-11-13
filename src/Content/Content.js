import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const FIXED_ADJUST = 'mdc-toolbar-fixed-adjust';

const propTypes = {
  fixed: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.string,
};

const defaultProps = {
  component: 'main',
};

const Content = ({
  fixed,
  className,
  children,
  component,
  ...otherProps
}) => {
  const classes = classnames({
    [FIXED_ADJUST]: fixed,
  }, className);

  return React.createElement(component, {
    className: classes,
    ...otherProps,
  }, children);
};
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
export default Content;

