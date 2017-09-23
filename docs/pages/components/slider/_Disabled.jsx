import React, {PropTypes} from 'react'
import Slider from '../../../../src/Slider'
import FormField from '../../../../src/FormField'
import Grid from '../../../../src/Grid/Grid'
import Cell from '../../../../src/Grid/Cell'
import Subheading1 from '../../../../src/Typography/Subheading1'

export default class Disabled extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={value:50};
  }

  render () {
    return (
      <Grid>
        <Cell col={12}>
          <Slider
            value={this.state.value}
            disabled
          />
        </Cell>
      </Grid>
    )
  }
}

