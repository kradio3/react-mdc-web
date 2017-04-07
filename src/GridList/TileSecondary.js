import React, { PropTypes, Children } from 'react';
import classnames from 'classnames';
import Icon from '../Icon/Icon';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const TileSecondary = ({ className, children, ...otherProps }) => {
  const childs = Children.map(children, (child) => {
    if (child.type === Icon) {
      const { className: childClassName } = child.props;
      const classes = classnames('mdc-grid-tile__icon', childClassName);
      return React.cloneElement(child, { className: classes });
    }
    return child;
  });
  return (
    <span
      className={classnames('mdc-grid-tile__secondary', className)}
      {...otherProps}
    >
      {childs}
    </span>
  );
};
TileSecondary.propTypes = propTypes;
export default TileSecondary;

