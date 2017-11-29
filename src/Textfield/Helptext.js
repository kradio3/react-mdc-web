import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  focused: PropTypes.bool,
  helptextPersistent: PropTypes.bool,
  helptextValidation: PropTypes.bool,
  invalid: PropTypes.bool,
};

const ROOT = 'mdc-text-field-helper-text';
const PERSISTENT = 'mdc-text-field-helper-text--persistent';
const VALIDATION = 'mdc-text-field-helper-text--validation-msg';

const Helptext = ({
  children,
  focused,
  helptextPersistent,
  helptextValidation,
  invalid,
}) => {
  const validationMsgNeedsDisplay = helptextValidation && invalid;
  const ariaHidden = !focused && !helptextPersistent && !validationMsgNeedsDisplay;
  const ariaProp = ariaHidden ? { 'aria-hidden': true } : {};
  const roleProp = validationMsgNeedsDisplay ? { role: 'alert' } : {};

  return (
    <p
      className={classnames(
        ROOT, {
          [PERSISTENT]: helptextPersistent,
          [VALIDATION]: helptextValidation,
        },
      )}
      {...ariaProp}
      {...roleProp}
    >
      {children}
    </p>
  );
};
Helptext.propTypes = propTypes;
export default Helptext;
