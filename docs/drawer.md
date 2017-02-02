```jsx
<Drawer permanent>
  <Spacer>Logo</Spacer>
  <Navigation>
    <NavigationItem
      selected
      href="#"
      iconName="inbox"
    >
      Inbox
    </NavigationItem>
    <NavigationItem
      href="#"
      iconName="star"
    >
      Star
    </NavigationItem>
  </Navigation>
</Drawer>
```
```jsx
<Drawer target="some-drawer">
  <DrawerHeader>
    <DrawerHeaderContent 
      className='mdc-theme--primary-bg mdc-theme--text-primary-on-primary'
    >
      Header here
    </DrawerHeaderContent>
  </DrawerHeader>
  <DrawerContent>
    <Navigation>
      <NavigationItem
        selected
        href="#"
        iconName="inbox"
      >
        Inbox
      </NavigationItem>
      <NavigationItem
        href="#"
        iconName="star"
      >
        Star
      </NavigationItem>
    </Navigation>
  </DrawerContent>
</Drawer>
```
