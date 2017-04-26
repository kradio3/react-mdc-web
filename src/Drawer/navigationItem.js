import React from 'react';
import classnames from 'classnames';
import detail from '../List/detail';

const navigationItem = (component, isTemporary) => {
  const {
      className,
      selected,
      children,
    } = component.props;
  const classes = classnames('mdc-list-item', {
    'mdc-permanent-drawer--selected': selected && !isTemporary,
    'mdc-temporary-drawer--selected': selected && isTemporary,
  }, className);

  const childs = React.Children.map(children, child =>
      detail(child),
    );

  return React.cloneElement(component, { className: classes, children: childs });
};
export default navigationItem;
