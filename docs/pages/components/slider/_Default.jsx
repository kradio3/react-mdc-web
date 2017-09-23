import React, {PropTypes} from 'react'
import Slider from '../../../../src/Slider'
import FormField from '../../../../src/FormField'
import Grid from '../../../../src/Grid/Grid'
import Cell from '../../../../src/Grid/Cell'
import Subheading1 from '../../../../src/Typography/Subheading1'

export default class Default extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={value:50,inputValue:50};
  }

  render () {
    return (
      <Grid>
        <Cell col={12}>
          <Slider
            value={this.state.value}
            onChange={(value)=>{
              this.setState({value})
            }}
            onInput={(inputValue)=>{
              this.setState({inputValue})
            }}
          />
        </Cell>
        <Cell col={12}>
          <Subheading1>{`Current value: ${this.state.value}`}</Subheading1>
          <Subheading1>{`Input value: ${this.state.inputValue}`}</Subheading1>
        </Cell>
      </Grid>
    )
  }
}

