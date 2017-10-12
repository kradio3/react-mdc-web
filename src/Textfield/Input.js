import PropTypes from 'prop-types';
import { createElement } from 'react';

const ROOT = 'mdc-textfield__input';
const propTypes = {
  textarea: PropTypes.bool,
};

const Input = ({ textarea, ...otherProps }) => {
  const type = textarea ? 'textarea' : 'input';
  return createElement(type, { className: ROOT, ...otherProps });
};
Input.propTypes = propTypes;
export default Input;
