import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const Card = ({ className, children }) => (
  <div
    className={classnames('mdc-card', className)}
  >
    {children}
  </div>
  );
Card.propTypes = propTypes;
export default Card;
