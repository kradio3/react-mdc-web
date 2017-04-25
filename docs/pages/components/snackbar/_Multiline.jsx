import React, {PropTypes} from 'react'
import IconToggle from '../../../../src/IconToggle/IconToggle'
import Snackbar from '../../../../src/Snackbar/Snackbar'
import Button from '../../../../src/Button/Button'

class Multiline extends React.PureComponent {

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
          multiline
          open={this.state.snackbar}
          onTimeout={()=> { this.setState({snackbar: false}) }}
        >
           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
        </Snackbar>
      </div>
    )
  }
}
export default Multiline;
