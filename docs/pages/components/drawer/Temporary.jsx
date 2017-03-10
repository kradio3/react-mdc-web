import React, {PropTypes} from 'react'
import Drawer from '../../../../src/Drawer/Drawer'
import DrawerSpacer from '../../../../src/Drawer/DrawerSpacer'
import DrawerContent from '../../../../src/Drawer/DrawerContent'
import DrawerHeader from '../../../../src/Drawer/DrawerHeader'
import DrawerHeaderContent from '../../../../src/Drawer/DrawerHeaderContent'
import Navigation from '../../../../src/Drawer/Navigation'
import Icon from '../../../../src/Icon/Icon'
import Button from '../../../../src/Button/Button'

class Permanent extends React.PureComponent {

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
          Show drawer
        </Button>
        <Drawer 
          open={this.state.isOpen}
          onClose={()=> { this.setState({isOpen: false}) }}
        >
          <DrawerHeader>
            <DrawerHeaderContent>
              Directions
            </DrawerHeaderContent>
          </DrawerHeader>
          <DrawerContent>
            <Navigation>
              <a href='#' selected><Icon name='directions_bus'/>Bus</a>
              <a href='#'><Icon name='directions_railway'/>Railway</a>
              <a href='#'><Icon name='directions_bike'/>Bike</a>
            </Navigation>
          </DrawerContent>
        </Drawer>
      </div>
    )
  }
}
export default Permanent;
