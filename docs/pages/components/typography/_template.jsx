import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Default from './Default'
import ChangeComponent from './ChangeComponent'
import AdjustMargin from './AdjustMargin'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const defaultContainer = document.getElementById("typography-default");
    ReactDOM.render(<Default/>, defaultContainer);

    const changeComponentContainer = document.getElementById("typography-change-component");
    ReactDOM.render(<ChangeComponent/>, changeComponentContainer);

    const adjustMarginContainer = document.getElementById("typography-adjust-margin");
    ReactDOM.render(<AdjustMargin/>, adjustMarginContainer);
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
