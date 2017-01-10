import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  mini: PropTypes.bool,
  plain: PropTypes.bool,
};

const Fab = ({
  className,
  children,
  mini,
  plain,
  ...otherProps
}) => {
  const classes = classnames(
    'mdc-fab', {
      'mdc-fab--mini': mini,
      'mdc-fab--plain': plain,
    }, className);
  return (
    <button
      className={classes}
      {...otherProps}
    >
      {children}
    </button>
  );
};
Fab.propTypes = propTypes;
export default Fab;
