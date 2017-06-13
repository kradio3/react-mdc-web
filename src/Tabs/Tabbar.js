import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const ROOT = 'mdc-tab-bar';

const Tabbar = ({ className, children, ...otherProps }) => (
  <nav
    className={classnames(ROOT, className)}
    {...otherProps}
  >
    {children}
    <span className={`${ROOT}__indicator`}/>
  </nav>
  );

Tabbar.propTypes = propTypes;
export default Tabbar;
