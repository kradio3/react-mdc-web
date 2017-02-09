import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Icon from '../Icon';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  temporary: PropTypes.bool,
};

const Navigation = ({ className, children, temporary, ...otherProps }) => {
  const navigationItems = React.Children.map(children, (navigationItem) => {
    const {
      className: navigationItemClasses,
      selected,
      children: navigationItemChildren,
    } = navigationItem.props;
    const classes = classnames('mdc-list-item', {
      'mdc-permanent-drawer--selected': selected && !temporary,
      'mdc-temporary-drawer--selected': selected && temporary,
    }, navigationItemClasses);

    const listItemChilds = React.Children.map(navigationItemChildren, (child) => {
      if (child.type === Icon) {
        const { className: iconClassName } = child.props;
        const iconClasses = classnames('mdc-list-item__start-detail', iconClassName);
        return React.cloneElement(child, { className: iconClasses, 'aria-hidden': true });
      }

      return child;
    });

    return React.cloneElement(navigationItem, { className: classes, children: listItemChilds });
  });

  return (
    <nav
      className={classnames('mdc-list', className)}
      {...otherProps}
    >
      { navigationItems }
    </nav>
  );
};
Navigation.propTypes = propTypes;
export default Navigation;
