import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const CardTitle = ({ className, children }) => (
  <h1
    className={classnames('mdc-card__title', 'mdc-card__title--large', className)}
  >
    {children}
  </h1>
  );
CardTitle.propTypes = propTypes;
export default CardTitle;
