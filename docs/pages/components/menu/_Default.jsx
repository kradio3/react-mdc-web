import React, {PropTypes} from 'react'
import Button from '../../../../src/Button/Button'
import {Menu, MenuItem, MenuDivider, MenuAnchor} from '../../../../src/Menu';

class Default extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={};
  }

  render () {
    return (
      <div>
        <Button
          raised
          onClick={()=>{this.setState({open:true})}}
        >
          Open menu
        </Button>
        <MenuAnchor>
          <Menu
            open={this.state.open}
            onClose={()=>{this.setState({open:false})}}
          >
            <MenuItem>
              Andromeda
            </MenuItem>
            <MenuItem>
              Black Eye Galaxy
            </MenuItem>
            <MenuItem>
              Bode's Galaxy
            </MenuItem>
            <MenuItem>
              Cartwheel Galaxy
            </MenuItem>
            <MenuDivider/>
            <MenuItem>
              Cosmos Redshift 7
            </MenuItem>
            <MenuItem>
              Hoag's Object
            </MenuItem>
            <MenuDivider/>
            <MenuItem>
              Large Magellanic Cloud
            </MenuItem>
            <MenuItem>
              Small Magellanic Cloud
            </MenuItem>
            <MenuDivider/>
            <MenuItem>
              Pinwheel Galaxy
            </MenuItem>
            <MenuItem>
              Sombrero Galaxy
            </MenuItem>
            <MenuItem>
              Sunflower Galaxy
            </MenuItem>

          </Menu>
        </MenuAnchor>
      </div>
    )
  }
}
export default Default;
