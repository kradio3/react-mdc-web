import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const Toolbar = ({ className, children, ...otherProps }) => (
  <header className={classnames('mdc-toolbar', className)} >
  <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
    <a className="material-icons">menu</a>
    <span className="mdc-toolbar__title">Title</span>
  </section>

  {children}
</header>
);
Toolbar.propTypes = propTypes;
export default Toolbar;

