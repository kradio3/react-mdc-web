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
    this.state={};
  }

  render () {
    return (
      <div>
        <Button 
          id="trigger"
          primary
          raised 
        >
          Show drawer
        </Button>
        <Drawer 
          target="trigger"
        >
          <DrawerHeader>
            <DrawerHeaderContent>
              Header here
            </DrawerHeaderContent>
          </DrawerHeader>
          <DrawerContent>
            <Navigation>
              <a href='#' selected><Icon name='inbox'/>Inbox</a>
              <a href='#'><Icon name='star'/>Star</a>
              <a href='#'><Icon name='check'/>Check</a>
            </Navigation>
          </DrawerContent>
        </Drawer>
      </div>
    )
  }
}
export default Permanent;
