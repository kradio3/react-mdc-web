import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Standard from './_Standard'
import Scrollable from './_Scrollable'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const standard = document.getElementById("simple");
    ReactDOM.render(<Standard/>, standard);

    const scrollable = document.getElementById("scrollable");
    ReactDOM.render(<Scrollable/>, scrollable);
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
