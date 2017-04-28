import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const Card = ({ className, children, ...otherProps }) => (
  <div
    className={classnames('mdc-card', className)}
    {...otherProps}
  >
    {children}
  </div>
  );
Card.propTypes = propTypes;
export default Card;
