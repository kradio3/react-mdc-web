import React, {PropTypes} from 'react'
import Checkbox from '../../../../src/Checkbox/Checkbox'
import Button from '../../../../src/Button/Button'

class Indeterminate extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={indeterminate: true, checked: false};
  }

  render () {
    return (
      <div style={{margin: '16px 0'}}>
        <Checkbox 
          id="allow-everything" 
          onChange={({target: {checked}})=>{
            this.setState({checked, indeterminate:false})
          }}
          checked={this.state.checked}
          indeterminate={this.state.indeterminate}
        />
        <Button
          disabled={this.state.indeterminate}
          onClick={() => {
            this.setState({indeterminate: true});
          }}
          raised
          style={{ marginLeft: '40px' }}
        >
          Make indeterminate
        </Button>
      </div>

    )
  }
}
export default Indeterminate;
