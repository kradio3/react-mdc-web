import React, {PropTypes} from 'react'
import IconToggle from '../../../../src/IconToggle/IconToggle'
import Grid from '../../../../src/Grid/Grid'
import Cell from '../../../../src/Grid/Cell'

class Default extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={};
  }

  render () {
    return (
      <Grid>
        <Cell col={3}>
          <IconToggle 
            className="material-icons" 
            onClick={() => {
              this.setState({starred: !this.state.starred})
            }}
          >
            {this.state.starred ? 'star' : 'star_border'}
          </IconToggle>
          Default
        </Cell>

        <Cell col={3}>
          <IconToggle 
            className="material-icons" 
            onClick={() => {
              this.setState({starred1: !this.state.starred1})
            }}
            primary
          >
            {this.state.starred1 ? 'star' : 'star_border'}
          </IconToggle>
          Primary
        </Cell>

        <Cell col={3}>
          <IconToggle 
            className="material-icons" 
            onClick={() => {
              this.setState({starred2: !this.state.starred2})
            }}
            accent
          >
            {this.state.starred2 ? 'star' : 'star_border'}
          </IconToggle>
          Accent
        </Cell>
        <Cell col={3}>
          <IconToggle 
            className="material-icons" 
            onClick={() => {
              this.setState({starred3: !this.state.starred3})
            }}
            disabled
          >
            {this.state.starred3 ? 'star' : 'star_border'}
          </IconToggle>
          Disabled
        </Cell>
      </Grid>
    )
  }
}
export default Default;
