import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { BODY, SCROLLABLE } from './constants';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  scrollable: PropTypes.bool,
};

const DialogBody = ({ className, children, scrollable, ...otherProps }) => (
  <section
    className={classnames(BODY, {
      [SCROLLABLE]: scrollable,
    }, className)}
    {...otherProps}
  >
    {children}
  </section>
  );
DialogBody.propTypes = propTypes;
export default DialogBody;
