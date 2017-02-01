import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Icon from '../Icon'

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  iconName: PropTypes.string,
  selected: PropTypes.bool,
};

const NavigationItem = ({ 
  className,
  children,
  iconName,
  selected,
  ...otherProps,
}) => {
  const icon = iconName && (
    <Icon 
      aria-hidden="true"
      className="mdc-list-item__start-detail"
      name={iconName}
    />
  );
  return (
    <a
      className={classnames('mdc-list-item', {
        'mdc-permanent-drawer--selected': selected,
      }, className)}
      {...otherProps}
    >
      {icon}
      {children}
    </a>
  );
}
NavigationItem.propTypes = propTypes;
export default NavigationItem;
