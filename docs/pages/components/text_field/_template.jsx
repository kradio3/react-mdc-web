import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import FloatingLabel from './_FloatingLabel'
import Helptext from './_Helptext'
import HelptextPersistent from './_HelptextPersistent'
import HelptextValidation from './_HelptextValidation'
import UseInvalidProp from './_UseInvalidProp'
import Textarea from './_Textarea'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const floating = document.getElementById("text-field-label");
    ReactDOM.render(<FloatingLabel/>, floating);

    const helptext = document.getElementById("text-field-helptext");
    ReactDOM.render(<Helptext/>, helptext);

    const helptextPersistent = document.getElementById("text-field-peristent");
    ReactDOM.render(<HelptextPersistent/>, helptextPersistent);

    const helptextValidation = document.getElementById("text-field-validation");
    ReactDOM.render(<HelptextValidation/>, helptextValidation);

    const useInvalidProp = document.getElementById("text-field-invalidprop");
    ReactDOM.render(<UseInvalidProp/>, useInvalidProp);

    const textarea = document.getElementById("text-field-textarea");
    ReactDOM.render(<Textarea/>, textarea);

  } 

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
export default Template;
