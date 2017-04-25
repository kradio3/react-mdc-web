import React, {PropTypes} from 'react'
import Switch from '../../../../src/Switch'
import FormField from '../../../../src/FormField'
import Grid from '../../../../src/Grid/Grid'
import Cell from '../../../../src/Grid/Cell'
import Subheading1 from '../../../../src/Typography/Subheading1' 

class Disabled extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={checked:true};
  }

  render () {
    return (
      <Grid>
        <Cell col={12}>
          <FormField id="lock">
            <Switch 
              checked={this.state.checked}
              disabled
              onChange={({target: {checked}})=>{
                this.setState({checked})
              }}
            />
            <label>Lock/Unlock</label>
          </FormField>
        </Cell>
      </Grid>
    )
  }
}
export default Disabled;
