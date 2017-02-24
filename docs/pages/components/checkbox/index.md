---
title: "Checkbox"
---

### Default checkbox 
```react-snippet
default-checkbox
```
```jsx
<Checkbox 
  id="allow-everything" 
  onChange={({target: {checked}})=>{
    this.setState({checked})
  }}
  checked={this.state.checked}
/>
```

### Indeterminate state 
```react-snippet
indeterminate-checkbox
```
```jsx
<Checkbox 
  id="allow-everything" 
  onChange={({target: {checked}})=>{
    this.setState({checked, indeterminate:false})
  }}
  checked={this.state.checked}
  indeterminate={this.state.indeterminate}
/>
```

### Labels
```react-snippet
labeled-checkbox
```
```jsx
<FormField>
  <Checkbox 
    id="labeled-checkbox" 
    onChange={({target: {checked}})=>{
      this.setState({checked})
    }}
    checked={this.state.checked}
  />
  <label htmlFor="labeled-checkbox">Add some labels</label>
</FormField>
```
