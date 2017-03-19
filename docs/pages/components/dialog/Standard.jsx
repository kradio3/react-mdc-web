import React, {PropTypes} from 'react'
import Dialog from '../../../../src/Dialog/Dialog'
import DialogBody from '../../../../src/Dialog/DialogBody'
import DialogTitle from '../../../../src/Dialog/DialogTitle'
import DialogHeader from '../../../../src/Dialog/DialogHeader'
import DialogFooter from '../../../../src/Dialog/DialogFooter'
import Button from '../../../../src/Button/Button'

class Standard extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={isOpen: false};
  }

  render () {
    return (
      <div>
        <Button
          primary
          raised
          onClick={()=> { this.setState({isOpen: !this.state.isOpen}) }}
        >
          Show dialog
        </Button>
        <Dialog
          open={this.state.isOpen}
          onClose={()=> { this.setState({isOpen: false}) }}
        >
          <DialogHeader>
            <DialogTitle>Use Google's location service?</DialogTitle>
          </DialogHeader>
          <DialogBody>
            Let Google help apps determine location.
          </DialogBody>
          <DialogFooter>
            <Button compact onClick={()=> { this.setState({isOpen: false}) }}>Decline</Button>
            <Button compact onClick={()=> { this.setState({isOpen: false}) }}>Accept</Button>
          </DialogFooter>
        </Dialog>
      </div>
    )
  }
}
export default Standard;
