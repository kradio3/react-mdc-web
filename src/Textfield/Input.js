import { PropTypes, createElement } from 'react';

const ROOT = 'mdc-textfield__input';
const propTypes = {
  multiline: PropTypes.bool,
};

const Input = ({ multiline, ...otherProps }) => {
  const type = multiline ? 'textarea' : 'input';
  return createElement(type, { className: ROOT, ...otherProps });
};
Input.propTypes = propTypes;
export default Input;
