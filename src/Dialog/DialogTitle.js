import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { HEADER_TITLE } from './constants';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const DialogTitle = ({ className, children }) => (
  <h2
    className={classnames(HEADER_TITLE, className)}
  >
    {children}
  </h2>
  );
DialogTitle.propTypes = propTypes;
export default DialogTitle;
