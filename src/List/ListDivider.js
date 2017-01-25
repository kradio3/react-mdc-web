import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  inset: PropTypes.bool,
};

const ListDivider = ({ className, inset }) => (
  <li
    className={classnames('mdc-list-divider', {
      'mdc-list-divider--inset': inset,
    }, className)}
    role={'separator'}
  />
  );
ListDivider.propTypes = propTypes;
export default ListDivider;
