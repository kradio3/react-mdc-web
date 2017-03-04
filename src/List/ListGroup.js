import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const ListGroup = ({ className, children }) => (
  <div
    className={classnames('mdc-list-group', className)}
  >
    {children}
  </div>
);
ListGroup.propTypes = propTypes;
export default ListGroup;
