import React, { PropTypes } from 'react';
import Label from './Label';
import Input from './Input';
import Field from './Field';
import Helptext from './Helptext';

class Textfield extends React.PureComponent {

  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    floatingLabel: PropTypes.string,
    helptext: PropTypes.string,
    helptextPersistent: PropTypes.bool,
    helptextValidation: PropTypes.bool,
    id: PropTypes.string,
    required: PropTypes.bool,
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

  renderField() {
    const { focus, invalid } = this.state;
    const {
      className,
      disabled,
      floatingLabel,
      helptext, // eslint-disable-line no-unused-vars
      helptextPersistent, // eslint-disable-line no-unused-vars
      helptextValidation, // eslint-disable-line no-unused-vars
      id,
      value,
      ...otherProps
    } = this.props;
    const label = floatingLabel || '';
    const customId = id || `textfield-${label.replace(/[^a-z0-9]/gi, '')}`;
    return (
      <Field
        className={className}
        focused={focus}
        disabled={disabled}
        invalid={invalid}
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
      </Field>
    );
  }

  renderHelptext() {
    const { focus, invalid } = this.state;
    const { helptext, helptextPersistent, helptextValidation } = this.props;
    return (
      <Helptext
        focused={focus}
        invalid={invalid}
        helptextPersistent={helptextPersistent}
        helptextValidation={helptextValidation}
      >
        { helptext }
      </Helptext>
    );
  }

  render() {
    const field = this.renderField();

    if (this.props.helptext) {
      return (
        <div>
          {field}
          {this.renderHelptext()}
        </div>
      );
    }

    return field;
  }
}
export default Textfield;
