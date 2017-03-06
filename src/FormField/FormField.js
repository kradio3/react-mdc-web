import React, { PropTypes, Children, cloneElement } from 'react';
import classnames from 'classnames';

const ROOT = 'mdc-form-field';
const ALIGN_END = `${ROOT}--align-end`;

const propTypes = {
  alignEnd: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};

const FormField = ({
  alignEnd,
  className,
  children,
  id,
  ...otherProps
}) => {
  const childs = Children.map(children, (child) => {
    if (child.type === 'label') {
      return cloneElement(child, { htmlFor: id });
    }
    return cloneElement(child, { id });
  });

  return (
    <div
      className={classnames(ROOT, {
        [ALIGN_END]: alignEnd,
      }, className)}
      {...otherProps}
    >
      {childs}
    </div>
  );
};
FormField.propTypes = propTypes;
export default FormField;
