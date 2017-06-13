import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  indeterminate: PropTypes.bool,
};

const Input = ({ className, indeterminate, ...otherProps }) => (
  <input
    className={classnames('mdc-checkbox__native-control', className)}
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
