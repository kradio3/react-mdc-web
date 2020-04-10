import React from 'react';

const SelectField = props => <select
    onChange={props.onChange}
    className='mdc-select'
    style={{ marginTop: '20px' }}
>
  {props.children}
</select>;

export default SelectField;