import PropTypes from 'prop-types';
import React, { Children, cloneElement } from 'react';
import classnames from 'classnames';
import Icon from '../Icon';

const ROOT = 'mdc-fab';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  mini: PropTypes.bool,
};

const Fab = ({
  className,
  mini,
  ...otherProps
}) => {
  const classes = classnames(
    ROOT, {
      [`${ROOT}--mini`]: mini,
    }, className);

  const children = Children.map(otherProps.children, (child) => {
    if (child.type === Icon) {
      const childClasses = child.props.className;
      return cloneElement(child, {
        className: classnames(childClasses, 'mdc-fab__icon'),
      });
    }
    return child;
  });

  return (
    <button
      className={classes}
      {...otherProps}
    >
      {children}
    </button>
  );
};
Fab.propTypes = propTypes;
export default Fab;
