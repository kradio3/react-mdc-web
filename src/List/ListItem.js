import React, { PropTypes, Children } from 'react';
import classnames from 'classnames';
import detail from '../List/detail';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const ListItem = ({ className, children, ...otherProps }) => {
  const childs = Children.map(children, (child, index) =>
    detail(child, index === 0),
  );
  return (
    <li
      className={classnames('mdc-list-item', className)}
      {...otherProps}
    >
      {childs}
    </li>
  );
};
ListItem.propTypes = propTypes;
export default ListItem;
