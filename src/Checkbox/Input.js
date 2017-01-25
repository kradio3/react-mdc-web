import React, { PropTypes } from 'react';

const propTypes = {
  indeterminate: PropTypes.bool,
};

const Input = ({ indeterminate, ...otherProps }) => (
  <input
    className="mdc-checkbox__native-control"
    type="checkbox"
    ref={(nativeComponent) => {
      if (nativeComponent) {
        /* eslint-disable no-param-reassign */
        nativeComponent.indeterminate = indeterminate;
        /* eslint-enable no-param-reassign */
      }
    }}
    {...otherProps}
  />
);
Input.propTypes = propTypes;
export default Input;
