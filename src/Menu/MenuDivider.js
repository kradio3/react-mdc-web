import React from 'react';
import ListDivider from '../List/ListDivider';

const MenuDivider = ({ ...props }) => (
  <ListDivider
    role="menuitem"
    {...props}
  />
);
export default MenuDivider;
