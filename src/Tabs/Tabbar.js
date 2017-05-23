import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
};

const ROOT = 'mdc-tab-bar';

const Tabbar = ({ className, ...otherProps }) => (
  <nav
    className={classnames(ROOT, className)}
    {...otherProps}
  />
  );

Tabbar.propTypes = propTypes;
export default Tabbar;
