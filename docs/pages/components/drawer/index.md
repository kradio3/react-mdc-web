---
title: "Drawer"
---

Permanent drawer
```jsx
<Drawer permanent>
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
Temporary drawer
```jsx
<button 
  id="trigger" 
  className="material-icons"
>
  menu
</button>

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
