import React from 'react';
import MenuItem from '../Menu/MenuItem';

const Option = props =>
  <MenuItem className="mdc-list-item" >
    {props.text}
  </MenuItem>;

export default Option;