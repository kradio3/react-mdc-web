import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Label from './Label';
import Input from './Input';

const ROOT = 'mdc-textfield';
const DISABLED = `${ROOT}--disabled`;
const FOCUSED = `${ROOT}--focused`;
const INVALID = `${ROOT}--invalid`;
const UPGRADED = `${ROOT}--upgraded`;

class Textfield extends React.PureComponent {

  static propTypes = {
    disabled: PropTypes.bool,
    floatingLabel: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  constructor(props) {
    super(props);
    this.state = { };
  }

  onFocus() {
    this.setState({ focus: true });
  }

  onBlur(event) {
    const invalid = !event.target.checkValidity();
    this.setState({ focus: false, invalid });
  }

  render() {
    const { focus, invalid } = this.state;
    const { floatingLabel, disabled, id, value, ...otherProps } = this.props;
    const customId = id || `textfield-${floatingLabel.replace(/[^a-z0-9]/gi, '')}`;
    return (
      <div
        className={classnames(ROOT, {
          [FOCUSED]: focus,
          [DISABLED]: disabled,
          [INVALID]: invalid,
        }, UPGRADED)}
      >
        <Input
          id={customId}
          disabled={disabled}
          onBlur={(event) => { this.onBlur(event); }}
          onFocus={() => { this.onFocus(); }}
          value={value}
          {...otherProps}
        />
        <Label
          id={customId}
          focused={focus}
          value={value}
        >
          {floatingLabel}
        </Label>
      </div>
    );
  }
}
export default Textfield;
