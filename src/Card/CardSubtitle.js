import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const CardSubtitle = ({ className, children }) => (
  <h2
    className={classnames('mdc-card__subtitle', className)}
  >
    {children}
  </h2>
  );
CardSubtitle.propTypes = propTypes;
export default CardSubtitle;
