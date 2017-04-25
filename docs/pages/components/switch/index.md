---
title: "Switch"
---

```react-snippet
default-switch
```
```jsx
<FormField id="unlock">
  <Switch 
    checked={this.state.checked}
    onChange={({target: {checked}})=>{
      this.setState({checked})
    }}
  />
  <label>Lock/Unlock</label>
</FormField>
```

### Disabled
```react-snippet
disabled-switch
```
Use ```disabled``` property to disable component
```jsx
<FormField id="lock">
  <Switch 
    checked={this.state.checked}
    disabled
    onChange={({target: {checked}})=>{
      this.setState({checked})
    }}
  />
  <label>Lock/Unlock</label>
</FormField>
```
