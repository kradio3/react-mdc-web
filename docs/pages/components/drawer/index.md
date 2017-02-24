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
```
### Temporary
```react-snippet
temporary
```
```jsx
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
```
