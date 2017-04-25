import React, {PropTypes} from 'react'
import Switch from '../../../../src/Switch'
import FormField from '../../../../src/FormField'
import Grid from '../../../../src/Grid/Grid'
import Cell from '../../../../src/Grid/Cell'
import Subheading1 from '../../../../src/Typography/Subheading1' 

class Default extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={checked:true};
  }

  render () {
    return (
      <Grid>
        <Cell col={12}>
          <FormField id="unlock">
            <Switch 
              checked={this.state.checked}
              onChange={({target: {checked}})=>{
                this.setState({checked})
              }}
            />
            <label>Lock/Unlock</label>
          </FormField>
        </Cell>
        <Cell col={12}>
          <Subheading1>{`Is checked: ${this.state.checked}`}</Subheading1>
        </Cell>
      </Grid>
    )
  }
}
export default Default;
