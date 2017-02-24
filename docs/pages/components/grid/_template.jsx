import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Grid from '../../../../src/Grid/Grid'
import Cell from '../../../../src/Grid/Cell'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const desktopContainer = document.getElementById("desktop-grid");
    ReactDOM.render(this.renderDesktop(), desktopContainer);
  } 

  renderDesktop() {
    return(
      <div>
        <Grid className="demo-grid-1">
          <Cell col={1}> 1 </Cell>
          <Cell col={1}> 1 </Cell>
          <Cell col={1}> 1 </Cell>
          <Cell col={1}> 1 </Cell>
          <Cell col={1}> 1 </Cell>
          <Cell col={1}> 1 </Cell>
          <Cell col={1}> 1 </Cell>
          <Cell col={1}> 1 </Cell>
          <Cell col={1}> 1 </Cell>
          <Cell col={1}> 1 </Cell>
          <Cell col={1}> 1 </Cell>
          <Cell col={1}> 1 </Cell>
        </Grid>
        <Grid className="demo-grid-1">
          <Cell col={3}> 3 </Cell>
          <Cell col={3}> 3 </Cell>
          <Cell col={3}> 3 </Cell>
          <Cell col={3}> 3 </Cell>
        </Grid>
        <Grid className="demo-grid-1">
          <Cell col={6} tablet={8}> 6 (tablet 8) </Cell>
          <Cell col={4} tablet={6}> 4 (tablet 6) </Cell>
          <Cell col={2} phone={4}> 2 (phone 4) </Cell>
        </Grid>
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
