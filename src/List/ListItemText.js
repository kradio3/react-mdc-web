import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
};

const ListItemText = ({ className, ...otherProps }) => (
  <span
    className={classnames('mdc-list-item__text', className)}
    {...otherProps}
  />
);
ListItemText.propTypes = propTypes;
export default ListItemText;
