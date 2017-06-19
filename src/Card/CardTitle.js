import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  large: PropTypes.bool,
};

const ROOT = 'mdc-card__title';
const LARGE = `${ROOT}--large`;

const CardTitle = ({ className, children, large }) => (
  <h1
    className={classnames(ROOT, {
      [LARGE]: large,
    }, className)}
  >
    {children}
  </h1>
  );
CardTitle.propTypes = propTypes;
export default CardTitle;
