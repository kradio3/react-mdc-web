import React from 'react';
import classnames from 'classnames';
import Icon from '../Icon';

const startDetail = (component) => {
  if (component.type === Icon) {
    const { className } = component.props;
    const classes = classnames('mdc-list-item__start-detail', className);
    return React.cloneElement(component, { className: classes, 'aria-hidden': true });
  }
  return component;
};
export default startDetail;
