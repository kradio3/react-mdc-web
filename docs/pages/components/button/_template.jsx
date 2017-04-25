import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Button from '../../../../src/Button/Button'
import Counter from './_Counter';

class Buttons extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const flatContainer = document.getElementById("flat-buttons");
    ReactDOM.render(this.renderButtons(), flatContainer);
    var raisedContainer = document.getElementById("raised-buttons");
    ReactDOM.render(this.renderButtons(true), raisedContainer);
    var counterContainer = document.getElementById("click-button");
    ReactDOM.render(<Counter/>, counterContainer);
  } 

  renderButtons(isRaised) {
    return (
      <div>
        <Button style={{margin:'16px'}} raised={isRaised}>Default</Button>
        <Button style={{margin:'16px'}} raised={isRaised} dense>Dense</Button>
        <Button style={{margin:'16px'}} raised={isRaised} primary>Primary</Button>
        <Button style={{margin:'16px'}} raised={isRaised} compact>Compact</Button>
        <Button style={{margin:'16px'}} raised={isRaised} accent>Accent</Button>
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
export default Buttons;
