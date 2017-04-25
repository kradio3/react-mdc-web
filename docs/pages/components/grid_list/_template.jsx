import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Default from './_Default'
import TwoLineCaption from './_TwoLineCaption'
import IconCaption from './_IconCaption'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const defaultContainer = document.getElementById("default-grid-list");
    ReactDOM.render(<Default/>, defaultContainer);

    const compactContainer = document.getElementById("grid-list-compact");
    ReactDOM.render(<Default compact/>, compactContainer);

    const ratioContainer = document.getElementById("grid-list-ratio");
    ReactDOM.render(<Default ratio="3x2"/>, ratioContainer);

    const twoLineContainer = document.getElementById("grid-list-support-text");
    ReactDOM.render(<TwoLineCaption twoLineCaption/>, twoLineContainer);

    const headerCaptionContainer = document.getElementById("grid-list-header-caption");
    ReactDOM.render(<TwoLineCaption twoLineCaption headerCaption/>, headerCaptionContainer);

    const iconCaptionContainer = document.getElementById("grid-list-icon-caption");
    ReactDOM.render(<IconCaption twoLineCaption captionIconAlign="start"/>, iconCaptionContainer);
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
