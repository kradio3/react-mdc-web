import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const CardHorizontalBlock = ({ className, children, ...otherProps }) => (
  <div
    className={classnames('mdc-card__horizontal-block', className)}
    {...otherProps}
  >
    {children}
  </div>
  );
CardHorizontalBlock.propTypes = propTypes;
export default CardHorizontalBlock;
