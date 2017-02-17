---
title: "Icon toggle"
---
Icon toggle default
```jsx
<IconToggle 
  className="material-icons" 
  onClick={() => {
    this.setState({starred: !this.state.starred})
  }}
>
  {this.state.starred ? 'star' : 'star_border'}
</IconToggle>
```

IconToggle primary
```jsx
<IconToggle 
  className="material-icons" 
  onClick={() => {
    this.setState({starred: !this.state.starred})
  }}
  primary
>
  {this.state.starred ? 'star' : 'star_border'}
</IconToggle>
```

IconToggle accent
```jsx
<IconToggle 
  className="material-icons" 
  onClick={() => {
    this.setState({starred: !this.state.starred})
  }}
  accent
>
  {this.state.starred ? 'star' : 'star_border'}
</IconToggle>
```

IconToggle disabled
```jsx
<IconToggle 
  className="material-icons" 
  onClick={() => {
    this.setState({starred: !this.state.starred})
  }}
  disabled
>
  {this.state.starred ? 'star' : 'star_border'}
</IconToggle>
```
