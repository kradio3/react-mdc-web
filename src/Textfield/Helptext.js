import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  focused: PropTypes.bool,
  helptextPersistent: PropTypes.bool,
  helptextValidation: PropTypes.bool,
  invalid: PropTypes.bool,
};

const ROOT = 'mdc-textfield-helptext';
const PERSISTENT = 'mdc-textfield-helptext--persistent';
const VALIDATION = 'mdc-textfield-helptext--validation-msg';

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
