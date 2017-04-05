---
title: "Menu"
---
```react-snippet
menu-default
```
```jsx
<MenuAnchor>
  <Menu
    open={open}
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
  </Menu>
</MenuAnchor>
```
### Horizontal and Vertical aligns
To align Menu component you can use ```bottom``` and ```right``` boolean properties
```react-snippet
bottom
```
```jsx
{ /* Bottom left */ }
<Menu
  bottom
  open={this.state.open}
  onClose={()=>{this.setState({open:false})}}
>
{/* items */}
</Menu>


{ /* Bottom right */ }
<Menu
  bottom
  right
  open={this.state.open}
  onClose={()=>{this.setState({open:false})}}
>
{/* items */}
</Menu>

```

