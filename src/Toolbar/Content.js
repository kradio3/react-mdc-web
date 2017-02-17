import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const ROOT = 'mdc-toolbar-fixed-adjust';

const Content = ({ className, children, ...otherProps }) => (
  <main className={classnames(ROOT, className)} {...otherProps} >
    {children}
  </main>
);
Content.propTypes = propTypes;
export default Content;

