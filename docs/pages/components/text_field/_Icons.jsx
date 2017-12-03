import React, {PropTypes} from 'react'
import Textfield from '../../../../src/Textfield/Textfield'
import {Grid, Cell} from '../../../../src/Grid'
import Icon from '../../../../src/Icon'

class Icons extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={email: '', phone: ''};
  }

  render () {
    return (
      <Grid>
        <Cell col={4}>
        {/* Leading icon */}
          <Textfield
            box
            floatingLabel="E-Mail"
            value={this.state.email}
            onChange={({target : {value : email}}) => {
              this.setState({ email })
            }}
          >
            <Icon name="email"/>
          </Textfield>
        </Cell>

        <Cell col={4}>
        {/* Trailing icon */}
          <Textfield
            box
            trailingIcon
            floatingLabel="Phone"
            value={this.state.phone}
            onChange={({target : {value : phone}}) => {
              this.setState({ phone })
            }}
          >
            <Icon name="phone"/>
          </Textfield>
        </Cell>

      </Grid>
    )
  }
}
export default Icons;
