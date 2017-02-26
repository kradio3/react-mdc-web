import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fixedToolbar: PropTypes.bool,
};

const Layout = ({
  children,
  className,
  fixedToolbar,
  ...otherProps
}) => {
  const childs = React.Children.map(children, child =>
    React.cloneElement(child, { fixedToolbar }),
  );
  return (
    <div
      className={className}
      {...otherProps}
    >
      {childs}
    </div>
  );
};
Layout.propTypes = propTypes;
export default Layout;
