---
title: "Toolbar"
---

Normal toolbar
```jsx
<Toolbar>
  <ToolbarSection align="start">
    <ToolbarTitle>Title</ToolbarTitle>
  </ToolbarSection>
</Toolbar>
```

Fixed toolbar
```jsx
<Toolbar fixed>
  <ToolbarSection align="start">
    <ToolbarTitle>Title</ToolbarTitle>
  </ToolbarSection>
</Toolbar>

{/* Adjust top margin for fixed toolbar */}
<Content>
  ...
</Content>
```
``` Content ``` will produce the ```<main>``` tag by default, but you can override this behavior with property ```component```
```jsx
<Content component="div">
  ...
</Content>
```

``` ToolbarSection ``` could be aligned at start, at center and at end of toolbar
```jsx
<Toolbar>
  <ToolbarSection align="start">
    Start
  </ToolbarSection>
  <ToolbarSection>
    Center
  </ToolbarSection>
   <ToolbarSection align="end">
    End
  </ToolbarSection>
</Toolbar>
