---
title: "Toolbar"
---

### Static toolbar
```react-snippet
normal-toolbar
```
```jsx
<Toolbar>
  <ToolbarRow>
    <ToolbarSection align="start">
      <ToolbarTitle>Title</ToolbarTitle>
    </ToolbarSection>
  </ToolbarRow>
</Toolbar>
```

### Sections
```react-snippet
sections
```
``` ToolbarSection ``` could be aligned at start, at center and at end of toolbar
```jsx
<Toolbar>
  <ToolbarRow>
    <ToolbarSection align="start">
      Start
    </ToolbarSection>
    <ToolbarSection>
      Center
    </ToolbarSection>
     <ToolbarSection align="end">
      End
    </ToolbarSection>
  </ToolbarRow>
</Toolbar>
```

### Fixed toolbar
```react-snippet
fixed-toolbar
```
```jsx
<Toolbar fixed>
  <ToolbarRow>
    <ToolbarSection align="start">
      <ToolbarTitle>Title</ToolbarTitle>
    </ToolbarSection>
  </ToolbarRow>
</Toolbar>

<Content fixed>
  ...
</Content>
```
``` Content ``` will produce the ```<main>``` tag by default, but you can override this behavior with property ```component```
```jsx
<Content component="div">
  ...
</Content>
```
For fixed toolbars, set the ```fixed``` property so that the top margin is set appropriately based on the toolbar.
```jsx
<Content fixed>
  ...
</Content>
```

### Waterfall toolbar
```react-snippet
waterfall-toolbar
```
```jsx
<Toolbar fixed waterfall>
  <ToolbarRow>
    <ToolbarSection align="start">
      <ToolbarTitle>Title</ToolbarTitle>
    </ToolbarSection>
  </ToolbarRow>
</Toolbar>
```

### Flexible toolar
```react-snippet
flexible-toolbar
```
```jsx
<Toolbar flexible>
  <ToolbarRow>
    <ToolbarSection align="start">
      <ToolbarTitle>Title</ToolbarTitle>
    </ToolbarSection>
  </ToolbarRow>
</Toolbar>
```

### Waterfall flexible toolbar
```react-snippet
waterfall-flexible-toolbar
```
```jsx
<Toolbar fixed waterfall flexible>
  <ToolbarRow>
    <ToolbarSection align="start">
      <ToolbarTitle>Title</ToolbarTitle>
    </ToolbarSection>
  </ToolbarRow>
</Toolbar>
```

### Waterfall toolbar with fixed last row
```react-snippet
waterfall-fixed_last_row_only-toolbar
```
```jsx
<Toolbar fixed waterfall flexible fixedLastRowOnly>
  <ToolbarRow>
    <ToolbarSection align="start">
      <ToolbarTitle>Title</ToolbarTitle>
    </ToolbarSection>
  </ToolbarRow>
  <ToolbarRow>
    <ToolbarSection align="start">
      The last row
    </ToolbarSection>
  </ToolbarRow>
</Toolbar>
```
