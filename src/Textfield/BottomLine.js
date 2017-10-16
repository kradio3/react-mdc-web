import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  active: PropTypes.bool,
};

const ROOT = 'mdc-textfield__bottom-line';
const ACTIVE = `${ROOT}--active`;

const BottomLine = ({ active }) => (
  <div
    className={classnames(ROOT, {
      [ACTIVE]: active,
    })}
  />
);
BottomLine.propTypes = propTypes;
export default BottomLine;
