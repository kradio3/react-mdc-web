---
title: "Checkbox"
---

### Default checkbox 
```react-snippet
default-checkbox
```
```jsx
<Checkbox 
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
<FormField id="labeled-checkbox">
  <Checkbox 
    onChange={({target: {checked}})=>{
      this.setState({checked})
    }}
    checked={this.state.checked}
  />
  <label>Add some labels</label>
</FormField>
```
