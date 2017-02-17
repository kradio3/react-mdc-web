---
title: "Checkbox"
---

Default checkbox 
```jsx
<Checkbox 
  id="allow-everything" 
  onChange={({target: {checked}})=>{
    this.setState({checked})
  }}
  checked={this.state.checked}
/>
```

Checkbox with indeterminate state 
```jsx
<Checkbox 
  id="allow-everything" 
  onChange={({target: {checked}})=>{
    this.setState({checked})
  }}
  checked={this.state.checked}
  indeterminate={this.state.checked===undefined}
/>
```

Checkbox with label 
```jsx
<FormField>
  <Checkbox 
    id="allow-everything" 
    onChange={({target: {checked}})=>{
      this.setState({checked})
    }}
    checked={this.state.checked}
  />
  <label htmlFor="allow-everything">Allow everything</label>
</FormField>
```
