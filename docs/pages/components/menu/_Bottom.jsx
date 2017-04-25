import React, {PropTypes} from 'react'
import Button from '../../../../src/Button/Button'
import {Menu, MenuItem, MenuDivider, MenuAnchor} from '../../../../src/Menu';

class Bottom extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={};
  }

  renderItems() {
    return [
      <MenuItem key={0}> Andromeda </MenuItem>,
      <MenuItem key={1}> Black Eye Galaxy </MenuItem>,
      <MenuItem key={2}> Bode's Galaxy </MenuItem>,
      <MenuItem key={3}> Cartwheel Galaxy </MenuItem>,
      <MenuDivider key={4}/>, 
      <MenuItem key={5}> Cosmos Redshift 7 </MenuItem>,
      <MenuItem key={6}> Hoag's Object </MenuItem>,
      <MenuDivider key={7}/>, 
      <MenuItem key={8}> Large Magellanic Cloud </MenuItem>,
      <MenuItem key={9}> Small Magellanic Cloud </MenuItem>,
      <MenuDivider key={10}/>, 
      <MenuItem key={11}> Pinwheel Galaxy </MenuItem>,
      <MenuItem key={12}> Sombrero Galaxy </MenuItem>,
      <MenuItem key={13}> Sunflower Galaxy </MenuItem>,
    ]
  }

  render () {
    return (
        <MenuAnchor style={{height: '40px'}}>
          <Button
            onClick={()=>{this.setState({openLeft:true})}}
            raised
            style={{position: 'absolute', left: 0}}
          >
            Bottom Left
          </Button>
          <Menu
            bottom
            open={this.state.openLeft}
            onClose={()=>{this.setState({openLeft:false})}}
          >
            {this.renderItems()}
          </Menu>

          <Button
            onClick={()=>{this.setState({openRight:true})}}
            raised
            style={{position: 'absolute', right: 0}}
          >
            Bottom Right
          </Button>
          <Menu
            bottom
            onClose={()=>{this.setState({openRight:false})}}
            open={this.state.openRight}
            right
          >
            {this.renderItems()}
          </Menu>
        </MenuAnchor>
    )
  }
}
export default Bottom;
