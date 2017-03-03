import React, { PropTypes, Children, cloneElement } from 'react';
import classnames from 'classnames';
import Icon from '../Icon';

const ROOT = 'mdc-fab';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  mini: PropTypes.bool,
  plain: PropTypes.bool,
};

const Fab = ({
  className,
  mini,
  plain,
  ...otherProps
}) => {
  const classes = classnames(
    ROOT, {
      [`${ROOT}--mini`]: mini,
      [`${ROOT}--plain`]: plain,
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
