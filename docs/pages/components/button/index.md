---
title: "Button"
---

### Flat buttons
```react-snippet
flat-buttons
```

```jsx
<Button>Default</Button>
<Button dense>Dense</Button>
<Button primary>Primary</Button>
<Button compact>Compact</Button>
<Button accent>Accent</Button>
```
### Raised buttons
```react-snippet
raised-buttons
```
```jsx
<Button raised>Default</Button>
<Button raised dense>Dense</Button>
<Button raised primary>Primary</Button>
<Button raised compact>Compact</Button>
<Button raised accent>Accent</Button>
```

### Handle click
```react-snippet
click-button
```
```jsx
<Button
  raised 
  primary
  onClick={()=>{
    let { counter } = this.state;
    counter ++;
    this.setState({ counter });
  }}
>
  Increment
</Button>
