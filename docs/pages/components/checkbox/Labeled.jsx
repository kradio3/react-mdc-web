import React, {PropTypes} from 'react'
import Checkbox from '../../../../src/Checkbox/Checkbox'
import FormField from '../../../../src/FormField/FormField'

class Labeled extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={ checked: false };
  }

  render () {
    return (
      <FormField>      
        <Checkbox 
          id="labeled-checkbox1" 
          onChange={({target: {checked}})=>{
            this.setState({checked})
          }}
          checked={this.state.checked}
        />
        <label htmlFor="labeled-checkbox1">Add some labels</label>
      </FormField>    
    )
  }
}
export default Labeled;
