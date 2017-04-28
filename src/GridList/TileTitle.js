import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
};

const TileTitle = ({ className, ...otherProps }) => (
  <span
    className={classnames('mdc-grid-tile__title', className)}
    {...otherProps}
  />
);

TileTitle.propTypes = propTypes;
export default TileTitle;

