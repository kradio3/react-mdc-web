import React, { PropTypes } from 'react';
import Label from './Label';
import Span from './Span';
import Input from './Input';

class Textfield extends React.PureComponent {

  static propTypes = {
    floatingLabel: PropTypes.string,
    disabled: PropTypes.bool,
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

  onBlur() {
    this.setState({ focus: false });
  }


  render() {
    const { focus } = this.state;
    const { floatingLabel, disabled } = this.props;
    return (
      <Label
        disabled={disabled}
        focused={focus}
      >
        <Input
          disabled={disabled}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <Span focused={focus}>{floatingLabel}</Span>
      </Label>
    );
  }
}
export default Textfield;
