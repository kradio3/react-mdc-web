import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  temporary: PropTypes.bool,
};

const DrawerContent = ({ className, children, temporary, ...otherProps }) => {
  const childs = React.Children.map(children, child => React.cloneElement(child, { temporary: temporary.toString() }));
  return (
    <div
      className={classnames(
        'mdc-list-group', {
          'mdc-temporary-drawer__content': temporary,
          'mdc-permanent-drawer__content': !temporary,
        },
        className,
      )}
      {...otherProps}
    >
      {childs}
    </div>
  );
};
DrawerContent.propTypes = propTypes;
export default DrawerContent;
