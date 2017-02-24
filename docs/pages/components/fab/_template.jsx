import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Fab from '../../../../src/Fab/Fab'
import Icon from '../../../../src/Icon/Icon'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const container = document.getElementById("fabs");
    ReactDOM.render(this.renderFabs(), container);
  } 

  renderFabs() {
    return(
      <div>
        <Fab style={{margin: '16px'}}><Icon name='create'/></Fab>
        <Fab style={{margin: '16px'}} mini><Icon name='create'/></Fab>
        <Fab style={{margin: '16px'}} plain><Icon name='create'/></Fab>
        <Fab style={{margin: '16px'}} plain mini><Icon name='create'/></Fab>
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
export default Template;
