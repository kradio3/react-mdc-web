import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  component: PropTypes.string,
};

const defaultProps = {
  component: 'a',
};

const ROOT = 'mdc-tab';
const ACTIVE = `${ROOT}--active`;

const Tab = ({
  active,
  className,
  component,
  ...otherProps
}) => {
  const classes = classnames(ROOT, { [ACTIVE]: active }, className);
  return React.createElement(component, {
    className: classes,
    ...otherProps,
  });
};
Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;
export default Tab;
