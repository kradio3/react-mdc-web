import React, {PropTypes} from 'react'
import IconToggle from '../../../../src/IconToggle/IconToggle'
import Snackbar from '../../../../src/Snackbar/Snackbar'
import Button from '../../../../src/Button/Button'

class SinglelineAction extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={};
  }

  render () {
    return (
      <div>
        <Button 
          raised
          onClick={()=> { this.setState({snackbar: true}) }}
        >Open snackbar</Button>
        <span 
          className="mdc-theme--text-secondary-on-light" 
          style={{marginLeft: '40px', fontSize: '1.2rem'}}
        > 
          {this.state.undoClicked && 'Undo has been called'}
        </span>
        <Snackbar
          action="undo"
          onClick={()=>{ this.setState({undoClicked: true}) }}
          open={this.state.snackbar}
          onTimeout={()=> { 
            this.setState({snackbar: false, undoClicked: false}) 
          }}
        >
          Document modified
        </Snackbar>
      </div>
    )
  }
}
export default SinglelineAction;
