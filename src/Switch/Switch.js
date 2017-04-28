import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const ROOT = 'mdc-switch';
const NATIVE_CONTROL = `${ROOT}__native-control`;
const BACKGROUND = `${ROOT}__background`;
const KNOB = `${ROOT}__knob`;

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

const Switch = ({
  className,
  ...otherProps
}) => {
  const classes = classnames(ROOT, className);

  return (
    <div className={classes}>
      <input
        className={NATIVE_CONTROL}
        type="checkbox"
        {...otherProps}
      />
      <div className={BACKGROUND}>
        <div className={KNOB} />
      </div>
    </div>
  );
};
Switch.propTypes = propTypes;
export default Switch;
