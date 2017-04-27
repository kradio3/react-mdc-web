import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
};

const ListItemTextSecondary = ({ className, ...otherProps }) => (
  <span
    className={classnames('mdc-list-item__text__secondary', className)}
    {...otherProps}
  />
);
ListItemTextSecondary.propTypes = propTypes;
export default ListItemTextSecondary;
