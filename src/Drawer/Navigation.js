import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  temporary: PropTypes.bool,
};

const Navigation = ({ className, children, temporary, ...otherProps }) => {
  const childs = children.map(child => React.cloneElement(child, { temporary }));

  return (
    <nav
      className={classnames('mdc-list', className)}
      {...otherProps}
    >
      { childs }
    </nav>
  );
};
Navigation.propTypes = propTypes;
export default Navigation;
