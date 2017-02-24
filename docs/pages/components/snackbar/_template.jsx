import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Singleline from './Singleline'
import SinglelineAction from './SinglelineAction'
import SinglelineTimeout from './SinglelineTimeout'
import Multiline from './Multiline'
import MultilineBottomAction from './MultilineBottomAction'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const singleline = document.getElementById("single-line");
    ReactDOM.render(<Singleline/>, singleline);

    const singlelineaction = document.getElementById("single-line-action");
    ReactDOM.render(<SinglelineAction/>, singlelineaction);

    const multiline = document.getElementById("multi-line");
    ReactDOM.render(<Multiline/>, multiline);

    const multilinebottom = document.getElementById("multi-line-bottom-action");
    ReactDOM.render(<MultilineBottomAction/>, multilinebottom);

    const singlelinetimout = document.getElementById("single-line-timeout");
    ReactDOM.render(<SinglelineTimeout/>, singlelinetimout);
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
