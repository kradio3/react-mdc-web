import PropTypes from 'prop-types';
import React, { Children, cloneElement } from 'react';
import classnames from 'classnames';
import Icon from '../Icon';

const propTypes = {
  box: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  invalid: PropTypes.bool,
  textarea: PropTypes.bool,
  trailingIcon: PropTypes.bool,
};

const ROOT = 'mdc-text-field';
const TEXTAREA = `${ROOT}--textarea`;
const DISABLED = `${ROOT}--disabled`;
const FOCUSED = `${ROOT}--focused`;
const INVALID = `${ROOT}--invalid`;
const UPGRADED = `${ROOT}--upgraded`;
const BOX = `${ROOT}--box`;
const LEADING_ICON = `${ROOT}--with-leading-icon`;
const TRAILING_ICON = `${ROOT}--with-trailing-icon`;
const ICON = `${ROOT}__icon`;

const Field = ({
  className,
  box,
  focused,
  disabled,
  invalid,
  children,
  textarea,
  trailingIcon,
}) => {
  let hasIcon = false;
  const childs = Children.map(children, (child) => {
    if (child && child.type === Icon) {
      hasIcon = true;
      const { className: childClassName } = child.props;
      const classes = classnames(ICON, childClassName);
      return cloneElement(child, { className: classes });
    }
    return child;
  });

  return (
    <div
      className={classnames(ROOT, {
        [TEXTAREA]: textarea,
        [BOX]: box,
        [FOCUSED]: focused,
        [DISABLED]: disabled,
        [INVALID]: invalid,
        [LEADING_ICON]: hasIcon && !trailingIcon,
        [TRAILING_ICON]: hasIcon && trailingIcon,
      }, UPGRADED, className)}
    >
      {childs}
    </div>
  );
};
Field.propTypes = propTypes;
export default Field;
