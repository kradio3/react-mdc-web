import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  alignEnd: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

const FormField = ({
  alignEnd,
  className,
  children,
  ...otherProps
}) => (
  <div
    className={classnames('mdc-form-field', {
      'mdc-form-field--align-end': alignEnd,
    }, className)}
    {...otherProps}
  >
    {children}
  </div>
);
FormField.propTypes = propTypes;
export default FormField;
