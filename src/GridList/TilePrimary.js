import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
};

const TilePrimary = ({ className, ...otherProps }) => (
  <div
    className={classnames('mdc-grid-tile__primary', className)}
    {...otherProps}
  />
);

TilePrimary.propTypes = propTypes;
export default TilePrimary;
