import React from 'react';
import classnames from 'classnames';
import Icon from '../Icon';

const detail = (component, start = true) => {
  const modificatorClass = start ? 'mdc-list-item__start-detail' : 'mdc-list-item__end-detail';
  if (component.type === Icon) {
    const { className } = component.props;
    const classes = classnames(modificatorClass, className);
    return React.cloneElement(component, { className: classes, 'aria-hidden': true });
  }
  return component;
};
export default detail;
