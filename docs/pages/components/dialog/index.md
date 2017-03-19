---
title: "Dialog"
---

### Simple dialog
```react-snippet
simple
```
```jsx
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
</Drawer>
```
### Scrollable dialog
```react-snippet
scrollable
```
```jsx
<Button
  primary
  raised
  onClick={()=> { this.setState({isOpen: !this.state.isOpen}) }}
>
  Show scrollable dialog
</Button>
<Dialog
  open={this.state.isOpen}
  onClose={()=> { this.setState({isOpen: false}) }}
>
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
    <Button compact onClick={()=> { this.setState({isOpen: false}) }} >Accept</Button>
  </DialogFooter>
</Drawer>
```
