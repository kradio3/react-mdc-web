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
          Directions
        </DrawerSpacer>
        <Navigation>
          <a href='#' selected><Icon name='directions_bus'/>Bus</a>
          <a href='#'><Icon name='directions_railway'/>Railway</a>
          <a href='#'><Icon name='directions_bike'/>Bike</a>
        </Navigation>
      </Drawer>
    )
  }
}
export default Permanent;
