import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Simple from './Simple'
import Labeled from './Labeled'
import Group from './Group'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const simpleContainer = document.getElementById("simple-radio");
    ReactDOM.render(<Simple/>, simpleContainer);

    const labeledContainer = document.getElementById("labeled-radio");
    ReactDOM.render(<Labeled/>, labeledContainer);

    const groupContainer = document.getElementById("radio-group");
    ReactDOM.render(<Group/>, groupContainer);
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
