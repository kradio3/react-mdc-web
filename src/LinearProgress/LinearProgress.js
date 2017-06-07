import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import transformStyleProperties from '../utils/transformStyleProperties';

const propTypes = {
  accent: PropTypes.bool,
  buffer: PropTypes.number,
  className: PropTypes.string,
  indeterminate: PropTypes.bool,
  progress: PropTypes.number,
  reversed: PropTypes.bool,
};

const ROOT = 'mdc-linear-progress';
const INDETERMINATE = `${ROOT}--indeterminate`;
const ACCENT = `${ROOT}--accent`;
const REVERSED = `${ROOT}--reversed`;

const LinearProgress = ({
  accent,
  buffer,
  className,
  indeterminate,
  progress,
  reversed,
  ...otherProps
}) => {
  const classes = classnames(
    ROOT, {
      [ACCENT]: accent,
      [INDETERMINATE]: indeterminate,
      [REVERSED]: reversed,
    }, className);
  const progressScales = {};
  transformStyleProperties.forEach((property) => {
    progressScales[property] = `scaleX(${progress})`;
  });

  const bufferScales = {};
  transformStyleProperties.forEach((property) => {
    bufferScales[property] = `scaleX(${buffer})`;
  });

  return (
    <div
      role="progressbar"
      className={classes}
      {...otherProps}
    >
      <div className="mdc-linear-progress__buffering-dots" />
      <div
        className="mdc-linear-progress__buffer"
        style={{ ...bufferScales }}
      />
      <div
        className="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
        style={{ ...progressScales }}
      >
        <span className="mdc-linear-progress__bar-inner" />
      </div>
      <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
        <span className="mdc-linear-progress__bar-inner" />
      </div>
    </div>
  );
};
LinearProgress.propTypes = propTypes;
export default LinearProgress;
