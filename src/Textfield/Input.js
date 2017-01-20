import React, { PropTypes } from 'react';
import classnames from 'classnames';

class Input extends React.PureComponent {

  static ROOT = 'mdc-textfield__input';

  static propTypes = {
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.registerListeners = this.registerListeners.bind(this);
  }

  registerListeners(nativeInput) {
    const { onFocus, onBlur } = this.props;
    nativeInput.addEventListener('focus', onFocus);
    nativeInput.addEventListener('blur', onBlur);
  }

  render() {
    return (
      <input
        className={classnames(Input.ROOT)}
        disabled={this.props.disabled}
        type="text"
        ref={this.registerListeners}
      />
    );
  }
}
export default Input;
