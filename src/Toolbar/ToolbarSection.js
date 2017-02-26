import React, { PropTypes } from 'react';
import classnames from 'classnames';
import isDefined from '../utils/isDefined';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  align: PropTypes.oneOf(['start', 'end']),
};

const ROOT = 'mdc-toolbar__section';

const ToolbarSection = ({ className, align, children, ...otherProps }) => (
  <section
    className={classnames(ROOT, {
      [`${ROOT}--align-${align}`]: isDefined(align),
    }, className)} {...otherProps}
  >
    {children}
  </section>
);
ToolbarSection.propTypes = propTypes;
export default ToolbarSection;

