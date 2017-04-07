import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
};

const TileSupportText = ({ className, ...otherProps }) => (
  <span
    className={classnames('mdc-grid-tile__support-text', className)}
    {...otherProps}
  />
);

TileSupportText.propTypes = propTypes;
export default TileSupportText;

