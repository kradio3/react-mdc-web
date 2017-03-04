import React, { PropTypes, Children, cloneElement } from 'react';
import classnames from 'classnames';
import ListDivider from './ListDivider';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  dense: PropTypes.bool,
};

const List = ({ className, children, dense }) => {
  const childs = Children.map(children, (child) => {
    if (child.type === ListDivider) {
      return cloneElement(child, { isListItem: true });
    }
    return child;
  });
  return (
    <ul
      className={classnames('mdc-list', {
        'mdc-list--dense': dense,
      }, className)}
    >
      {childs}
    </ul>
  );
};
List.propTypes = propTypes;
export default List;
