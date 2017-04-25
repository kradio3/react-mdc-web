import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Default from './_Default'
import Bottom from './_Bottom'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const menuDefault = document.getElementById("menu-default");
    ReactDOM.render(<Default/>, menuDefault);

    const bottom = document.getElementById("bottom");
    ReactDOM.render(<Bottom/>, bottom);
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
