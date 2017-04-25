import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import FloatingLabel from './_FloatingLabel'
import Helptext from './_Helptext'
import HelptextPersistent from './_HelptextPersistent'
import HelptextValidation from './_HelptextValidation'
import Multiline from './_Multiline'

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

    const multiline = document.getElementById("text-field-multiline");
    ReactDOM.render(<Multiline/>, multiline);

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
