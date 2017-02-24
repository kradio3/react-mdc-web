import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Permanent from './Permanent'
import Temporary from './Temporary'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const permanent = document.getElementById("permanent");
    ReactDOM.render(<Permanent/>, permanent);

    const temporary = document.getElementById("temporary");
    ReactDOM.render(<Temporary/>, temporary);
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
