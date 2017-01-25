import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  dense: PropTypes.bool,
};

const List = ({ className, children, dense }) => (
  <ul
    className={classnames('mdc-list', {
      'mdc-list--dense': dense,
    }, className)}
  >
    {children}
  </ul>
  );
List.propTypes = propTypes;
export default List;
