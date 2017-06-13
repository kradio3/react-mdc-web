import React, {PropTypes} from 'react'
import LinearProgress from '../../../../src/LinearProgress/LinearProgress'
import {Grid, Cell} from '../../../../src/Grid'

class Default extends React.PureComponent {

  constructor(props){
    super(props);
  }

  render () {
    return (
      <Grid>
        <Cell col={12}>
          <LinearProgress {...this.props}/>
        </Cell>
        <Cell col={12}>
          <LinearProgress reversed {...this.props}/>
        </Cell>
        <Cell col={12}>
          <LinearProgress accent {...this.props}/>
        </Cell>
      </Grid>
    )
  }
}
export default Default;
