import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Normal from './Normal'
import Fixed from './Fixed'
import Sections from './Sections'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const defaultContainer = document.getElementById("normal-toolbar");
    ReactDOM.render(<Normal/>, defaultContainer);

    const fixedContainer = document.getElementById("fixed-toolbar");
    ReactDOM.render(<Fixed/>, fixedContainer);

    const sectionsContainer = document.getElementById("sections");
    ReactDOM.render(<Sections/>, sectionsContainer);
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
