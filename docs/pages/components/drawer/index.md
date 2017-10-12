---
title: "Drawer"
---

### Permanent
```react-snippet
permanent
```
```jsx
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
```
### Temporary
```react-snippet
temporary
```
```jsx
<Button 
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

```
