import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Default from './_Default'
import Disabled from './_Disabled'
import Discrete from './_Discrete'
import DiscreteWithMarkers from './_DiscreteWithMarkers'

export default class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const defaultContainer = document.getElementById("default-slider");
    ReactDOM.render(<Default/>, defaultContainer);
    const disabledContainer = document.getElementById("disabled-slider");
    ReactDOM.render(<Disabled/>, disabledContainer);
    const discreteContainer = document.getElementById("discrete-slider");
    ReactDOM.render(<Discrete/>, discreteContainer);
    const discreteWithMarkersContainer = document.getElementById("discrete-with-markers-slider");
    ReactDOM.render(<DiscreteWithMarkers/>, discreteWithMarkersContainer);
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

