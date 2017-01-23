import React, { PropTypes } from 'react';
import Label from './Label';
import Span from './Span';
import Input from './Input';

class Textfield extends React.PureComponent {

  static propTypes = {
    disabled: PropTypes.bool,
    floatingLabel: PropTypes.string,
    value: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = { };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
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
    const { floatingLabel, disabled, value, ...otherProps } = this.props;
    return (
      <Label
        disabled={disabled}
        focused={focus}
        invalid={invalid}
      >
        <Input
          disabled={disabled}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          value={value}
          {...otherProps}
        />
        <Span
          focused={focus}
          value={value}
        >
          {floatingLabel}
        </Span>
      </Label>
    );
  }
}
export default Textfield;
