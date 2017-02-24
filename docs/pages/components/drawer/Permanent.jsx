import React, {PropTypes} from 'react'
import Drawer from '../../../../src/Drawer/Drawer'
import DrawerSpacer from '../../../../src/Drawer/DrawerSpacer'
import Navigation from '../../../../src/Drawer/Navigation'
import Icon from '../../../../src/Icon/Icon'

class Permanent extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={};
  }

  render () {
    return (
      <Drawer permanent>
        <DrawerSpacer>
          Spacer
        </DrawerSpacer>
        <Navigation>
          <a href='#' 
            selected
          >
            <Icon name='inbox'/>
            Inbox
          </a>
          <a href='#'><Icon name='star'/>Star</a>
          <a href='#'><Icon name='check'/>Check</a>
        </Navigation>
      </Drawer>
    )
  }
}
export default Permanent;
