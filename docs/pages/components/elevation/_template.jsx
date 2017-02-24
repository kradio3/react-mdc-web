import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Default from './Default'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const container = document.getElementById("elevations");
    ReactDOM.render(<Default/>, container);
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
