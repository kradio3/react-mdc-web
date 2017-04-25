import React, {PropTypes} from 'react'
import IconToggle from '../../../../src/IconToggle/IconToggle'
import Snackbar from '../../../../src/Snackbar/Snackbar'
import Button from '../../../../src/Button/Button'

class SinglelineTimeout extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={};
  }

  render () {
    return (
      <div>
        <Button 
          raised
          primary
          onClick={()=> { this.setState({snackbar: true}) }}
        >Open snackbar</Button>
        <Snackbar
          timeout={5000}
          open={this.state.snackbar}
          onTimeout={()=> { this.setState({snackbar: false}) }}
        >
          Loading complete
        </Snackbar>
      </div>
    )
  }
}
export default SinglelineTimeout;
