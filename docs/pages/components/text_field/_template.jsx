import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import FloatingLabel from './FloatingLabel'
import Helptext from './Helptext'
import HelptextPersistent from './HelptextPersistent'
import HelptextValidation from './HelptextValidation'

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
