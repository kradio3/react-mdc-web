import React, {PropTypes} from 'react'
import Textfield from '../../../../src/Textfield/Textfield'
import {Grid, Cell} from '../../../../src/Grid'

class HelptextPersistent extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={product: ''};
  }

  render () {
    return (
      <Grid>
        <Cell col={12}>
          <Textfield
            floatingLabel="Your product or service"
            helptext="For example, flowers or used cars"
            helptextPersistent
            value={this.state.product}
            onChange={({target : {value : product}}) => {
              this.setState({ product })
            }}
          />
        </Cell>
      </Grid>
    )
  }
}
export default HelptextPersistent;
