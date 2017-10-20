import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  menu: PropTypes.bool,
};

const ToolbarIcon = ({
  className,
  menu,
  ...otherProps
}) => (
  <i
    className={classnames(menu ? 'mdc-toolbar__icon--menu' : 'mdc-toolbar__icon', className)}
    {...otherProps}
  />
);
ToolbarIcon.propTypes = propTypes;
export default ToolbarIcon;

