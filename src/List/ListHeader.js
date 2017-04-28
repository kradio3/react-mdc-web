import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.string,
};

const defaultProps = {
  component: 'h3',
};

const ListHeader = ({
  className,
  children,
  component,
  ...otherProps
}) => {
  const classes = classnames('mdc-list-group__subheader', className);
  return React.createElement(component, {
    className: classes,
    ...otherProps,
  }, children);
};
ListHeader.propTypes = propTypes;
ListHeader.defaultProps = defaultProps;
export default ListHeader;

