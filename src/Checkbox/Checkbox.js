import React from 'react';
import Input from './Input';

const Checkbox = props => (
  <div
    className="mdc-checkbox"
  >
    <Input
      {...props}
    />
    <div className="mdc-checkbox__background">
      <svg
        version="1.1"
        className="mdc-checkbox__checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          className="mdc-checkbox__checkmark__path"
          fill="none"
          stroke="white"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        />
      </svg>
      <div className="mdc-checkbox__mixedmark" />
    </div>
  </div>
);

export default Checkbox;
