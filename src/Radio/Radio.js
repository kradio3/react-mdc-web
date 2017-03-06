import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
const ROOT = 'mdc-radio';
const DISABLED = `${ROOT}--disabled`;
const BACKGROUND = `${ROOT}__background`;
const OUTER_CIRCLE = `${ROOT}__outer-circle`;
const INNER_CIRCLE = `${ROOT}__inner-circle`;

const Radio = ({
  children, // eslint-disable-line no-unused-vars
  className,
  disabled,
  name,
  ...otherProps
}) => {
  const classes = classnames(
    ROOT, {
      [DISABLED]: disabled,
    }, className);
  return (
    <div
      className={classes}
    >
      <input
        className="mdc-radio__native-control"
        disabled={disabled}
        type="radio"
        name={name}
        {...otherProps}
      />
      <div className={BACKGROUND}>
        <div className={OUTER_CIRCLE} />
        <div className={INNER_CIRCLE} />
      </div>
    </div>
  );
};
Radio.propTypes = propTypes;
export default Radio;
