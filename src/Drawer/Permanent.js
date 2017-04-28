import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const Permanent = ({ className, children, ...otherProps }) => (
  <nav
    className={classnames('mdc-permanent-drawer', className)}
    {...otherProps}
  >
    <div
      className="mdc-permanent-drawer__content"
    >
      {children}
    </div>
  </nav>
);
Permanent.propTypes = propTypes;
export default Permanent;
