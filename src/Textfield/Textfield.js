import PropTypes from 'prop-types';
import React from 'react';
import Label from './Label';
import Input from './Input';
import Field from './Field';
import Helptext from './Helptext';
import BottomLine from './BottomLine';

class Textfield extends React.PureComponent {

  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    floatingLabel: PropTypes.string,
    helptext: PropTypes.string,
    helptextPersistent: PropTypes.bool,
    helptextValidation: PropTypes.bool,
    useInvalidProp: PropTypes.bool,
    invalid: PropTypes.bool,
    id: PropTypes.string,
    multiline: PropTypes.bool,
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
    const focus = this.state.focus;
    let invalid = this.state.invalid;
    const {
      className,
      disabled,
      floatingLabel,
      helptext, // eslint-disable-line no-unused-vars
      helptextPersistent, // eslint-disable-line no-unused-vars
      helptextValidation, // eslint-disable-line no-unused-vars
      useInvalidProp,
      invalid: invalidProp,
      id,
      multiline,
      value, // eslint-disable-line no-unused-vars
      ...otherProps
    } = this.props;
    if (useInvalidProp) invalid = !!invalidProp;
    const label = floatingLabel || '';
    const customId = id || `textfield-${label.replace(/[^a-z0-9]/gi, '')}`;
    return (
      <Field
        className={className}
        disabled={disabled}
        focused={focus}
        invalid={invalid}
        multiline={multiline}
      >
        <Input
          disabled={disabled}
          id={customId}
          multiline={multiline}
          onBlur={(event) => { this.onBlur(event); }}
          onFocus={() => { this.onFocus(); }}
          value={value}
          {...otherProps}
        />
        <Label
          focused={focus}
          id={customId}
          value={value}
        >
          {floatingLabel}
        </Label>
        <BottomLine active={focus} />
      </Field>
    );
  }

  renderHelptext() {
    const focus = this.state.focus;
    let invalid = this.state.invalid;
    const {
      helptext,
      helptextPersistent,
      helptextValidation,
      useInvalidProp,
      invalid: invalidProp } = this.props;
    if (useInvalidProp) invalid = !!invalidProp;
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
