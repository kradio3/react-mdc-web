import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Default from './_Default'
import Detail from './_Detail'
import Divider from './_Divider'
import Group from './_Group'
import TwoLines from './_TwoLines'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const container = document.getElementById("list-text-only");
    ReactDOM.render(<Default/>, container);

    const dense = document.getElementById("list-dense");
    ReactDOM.render(<Default dense/>, dense);

    const detail = document.getElementById("list-detail");
    ReactDOM.render(<Detail/>, detail);

    const divider = document.getElementById("list-divider");
    ReactDOM.render(<Divider/>, divider);

    const group = document.getElementById("list-group");
    ReactDOM.render(<Group/>, group);

    const twoLines = document.getElementById("list-two-lines");
    ReactDOM.render(<TwoLines/>, twoLines);
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
