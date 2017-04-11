import { createElement, PropTypes } from 'react';
import classnames from 'classnames';
import ROOT from './constants';

const ADJUST_MARGIN = `${ROOT}--adjust-margin`;

const propTypes = {
  component: PropTypes.string,
  adjustMargin: PropTypes.bool,
};

const TypographyElement = ({
  adjustMargin,
  className,
  component,
  modificator,
  ...otherProps
}) => {
  const classes = classnames(`${ROOT}--${modificator}`, {
    [ADJUST_MARGIN]: adjustMargin,
  }, className);
  return createElement(component, {
    className: classes,
    ...otherProps,
  });
};

TypographyElement.propTypes = propTypes;

export default TypographyElement;
