import React, {PropTypes} from 'react'
import Checkbox from '../../../../src/Checkbox/Checkbox'

class Default extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={ checked: false };
  }

  render () {
    return (
      <Checkbox 
        id="allow-everything" 
        onChange={({target: {checked}})=>{
          this.setState({checked})
        }}
        checked={this.state.checked}
      />

    )
  }
}
export default Default;
