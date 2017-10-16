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
<Button compact>Compact</Button>
```
### Raised buttons
```react-snippet
raised-buttons
```
```jsx
<Button raised>Default</Button>
<Button raised dense>Dense</Button>
<Button raised compact>Compact</Button>
```

### Handle click
```react-snippet
click-button
```
```jsx
<Button
  raised 
  onClick={()=>{
    let { counter } = this.state;
    counter ++;
    this.setState({ counter });
  }}
>
  Increment
</Button>
