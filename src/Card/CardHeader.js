import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const CardHeader = ({ className, children }) => (
  <section
    className={classnames('mdc-card__primary', className)}
  >
    {children}
  </section>
  );
CardHeader.propTypes = propTypes;
export default CardHeader;
