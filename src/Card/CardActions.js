import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const CardActions = ({ className, children }) => (
  <section
    className={classnames('mdc-card__actions', className)}
  >
    {children}
  </section>
  );
CardActions.propTypes = propTypes;
export default CardActions;
