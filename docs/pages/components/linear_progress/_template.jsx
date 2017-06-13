import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Default from './_Default'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const defaultContainer = document.getElementById("default-linear-progress");
    ReactDOM.render(<Default progress={0.4}/>, defaultContainer);

    const iContainer = document.getElementById("default-indeterminate-progress");
    ReactDOM.render(<Default indeterminate/>, iContainer);

    const bContainer = document.getElementById("default-buffer-progress");
    ReactDOM.render(<Default progress={0.5} buffer={0.8}/>, bContainer);
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
