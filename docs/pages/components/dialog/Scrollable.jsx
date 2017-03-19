import React, {PropTypes} from 'react'
import Dialog from '../../../../src/Dialog/Dialog'
import DialogBody from '../../../../src/Dialog/DialogBody'
import DialogTitle from '../../../../src/Dialog/DialogTitle'
import DialogHeader from '../../../../src/Dialog/DialogHeader'
import DialogFooter from '../../../../src/Dialog/DialogFooter'
import Button from '../../../../src/Button/Button'
import List from '../../../../src/List/List'
import ListItem from '../../../../src/List/ListItem'

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
        <Dialog open={this.state.isOpen}>
          <DialogHeader>
            <DialogTitle>Choose a Ringtone</DialogTitle>
          </DialogHeader>
          <DialogBody scrollable>
            <List>
              <ListItem>None</ListItem>
              <ListItem>Callisto</ListItem>
              <ListItem>Ganymede</ListItem>
              <ListItem>Luna</ListItem>
              <ListItem>Marimba</ListItem>
              <ListItem>Schwifty</ListItem>
              <ListItem>Callisto</ListItem>
              <ListItem>Ganymede</ListItem>
              <ListItem>Luna</ListItem>
              <ListItem>Marimba</ListItem>
              <ListItem>Schwifty</ListItem>
            </List>
          </DialogBody>
          <DialogFooter>
            <Button compact onClick={()=> { this.setState({isOpen: false}) }}>Cancel</Button>
            <Button compact onClick={()=> { this.setState({isOpen: false}) }}>Accept</Button>
          </DialogFooter>
        </Dialog>
      </div>
    )
  }
}
export default Standard;
