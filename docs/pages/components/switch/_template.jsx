import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Default from './_Default'
import Disabled from './_Disabled'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const defaultContainer = document.getElementById("default-switch");
    ReactDOM.render(<Default/>, defaultContainer);
    const disabledContainer = document.getElementById("disabled-switch");
    ReactDOM.render(<Disabled/>, disabledContainer);
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
