import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Default from './_Default'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const defaultContainer = document.getElementById("default-tabs");
    ReactDOM.render(<Default/>, defaultContainer);
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
