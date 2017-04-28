import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  focused: PropTypes.bool,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const ROOT = 'mdc-textfield__label';
const LABEL_FLOAT_ABOVE = `${ROOT}--float-above`;

const Label = ({ focused, children, id, value }) => (
  <label
    className={classnames(
        ROOT, {
          [LABEL_FLOAT_ABOVE]: focused || value,
        },
      )}
    htmlFor={id}
  >
    {children}
  </label>
  );
Label.propTypes = propTypes;
export default Label;
