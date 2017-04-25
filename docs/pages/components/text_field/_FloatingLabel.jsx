import React, {PropTypes} from 'react'
import Textfield from '../../../../src/Textfield/Textfield'
import {Grid, Cell} from '../../../../src/Grid'

class FloatingLabel extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={city: '', state: '', zip: ''};
  }

  render () {
    return (
      <Grid>
        <Cell col={4}>
          <Textfield
            floatingLabel="City"
            value={this.state.city}
            onChange={({target : {value : city}}) => {
              this.setState({ city })
            }}
          />
        </Cell>

        {/* Disabled field */}
        <Cell col={4}>
          <Textfield
            disabled
            floatingLabel="State"
            value={this.state.state}
            onChange={({target : {value : state}}) => {
              this.setState({ state })
            }}
          />
        </Cell>

        {/* Required field */}
        <Cell col={4}>
          <Textfield
            floatingLabel="Zip"
            required
            value={this.state.zip}
            onChange={({target : {value : zip}}) => {
              this.setState({ zip })
            }}
          />
        </Cell>
      </Grid>
    )
  }
}
export default FloatingLabel;
