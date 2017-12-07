import React from 'react';

const Option = props =>
    <option
        onClick={props.onClick}
        value={props.value}
    >
      {props.children}
    </option>;

export default Option;