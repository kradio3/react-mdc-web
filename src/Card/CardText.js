import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const CardText = ({ className, children }) => (
  <section
    className={classnames('mdc-card__supporting-text', className)}
  >
    {children}
  </section>
  );
CardText.propTypes = propTypes;
export default CardText;
