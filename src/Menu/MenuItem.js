import React, { PropTypes } from 'react';
import ListItem from '../List/ListItem';

const propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
};

const MenuItem = ({ children, delay, ...otherProps }) => {
  const style = delay ? { transitionDelay: `${delay.toFixed(3)}s` } : {};
  return (
    <ListItem
      role="menuitem"
      style={style}
      {...otherProps}
    >
      {children}
    </ListItem>
  );
};
MenuItem.propTypes = propTypes;
export default MenuItem;
