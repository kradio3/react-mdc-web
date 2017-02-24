import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Default from './Default'
import FloatingLabel from './FloatingLabel'
import Disabled from './Disabled'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const defaultContainer = document.getElementById("text-field");
    ReactDOM.render(<Default/>, defaultContainer);

    const floating = document.getElementById("text-field-label");
    ReactDOM.render(<FloatingLabel/>, floating);

    const disabled = document.getElementById("text-field-disabled");
    ReactDOM.render(<Disabled/>, disabled);
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
