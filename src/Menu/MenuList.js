import PropTypes from 'prop-types';
import React from 'react';
import List from '../List/List';
import ScaledComponent from './ScaledComponent';
import DelayedItems from './DelayedItems';

const propTypes = {
  children: PropTypes.node,
};

const MenuList = ({ children, ...otherProps }) =>
  <List
    className="mdc-simple-menu__items"
    role="menu"
    {...otherProps}
  >
    {children}
  </List>
;
MenuList.propTypes = propTypes;
export default ScaledComponent(DelayedItems(MenuList));
