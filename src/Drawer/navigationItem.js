import React from 'react';
import classnames from 'classnames';
import startDetail from '../List/startDetail';

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
      startDetail(child),
    );

  return React.cloneElement(component, { className: classes, children: childs });
};
export default navigationItem;
