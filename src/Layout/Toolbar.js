import React, { PropTypes } from 'react';
import classnames from 'classnames';

const ROOT = 'mdc-toolbar';
const FIXED = `${ROOT}--fixed`;

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fixedToolbar: PropTypes.bool,
};

const Toolbar = ({
  className,
  fixedToolbar,
  children,
  ...otherProps
}) => (
  <header
    className={classnames(ROOT, {
      [FIXED]: fixedToolbar,
    }, className)}
    {...otherProps}
  >
    {children}
  </header>
);
Toolbar.propTypes = propTypes;
export default Toolbar;

