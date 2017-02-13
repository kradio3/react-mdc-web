import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const CardMedia = ({ className, children, ...otherProps }) => (
  <section
    className={classnames('mdc-card__media', className)}
    {...otherProps}
  >
    {children}
  </section>
  );
CardMedia.propTypes = propTypes;
export default CardMedia;
