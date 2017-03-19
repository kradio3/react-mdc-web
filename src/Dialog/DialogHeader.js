import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { HEADER } from './constants';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const DialogHeader = ({ className, children }) => (
  <header
    className={classnames(HEADER, className)}
  >
    {children}
  </header>
  );
DialogHeader.propTypes = propTypes;
export default DialogHeader;
