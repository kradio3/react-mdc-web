import React, { PropTypes } from 'react';
import classnames from 'classnames';
import navigationItem from './navigationItem';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  temporary: PropTypes.bool,
};

const Navigation = ({ className, children, temporary, ...otherProps }) => {
  const navigationItems = React.Children.map(children, item =>
    navigationItem(item, temporary),
  );

  return (
    <nav
      className={classnames('mdc-list', className)}
      {...otherProps}
    >
      { navigationItems }
    </nav>
  );
};
Navigation.propTypes = propTypes;
export default Navigation;
