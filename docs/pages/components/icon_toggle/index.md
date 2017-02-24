---
title: "Icon toggle"
---

```react-snippet
default-icon-toggle
```
Default
```jsx
<IconToggle 
  className="material-icons" 
  onClick={() => { this.setState({starred: !this.state.starred}) }}
>
  {this.state.starred ? 'star' : 'star_border'}
</IconToggle>
```
Primary
```jsx
<IconToggle 
  className="material-icons" 
  onClick={() => { this.setState({starred: !this.state.starred}) }}
  primary
>
  {this.state.starred ? 'star' : 'star_border'}
</IconToggle>
```
Accent
```jsx
<IconToggle 
  className="material-icons" 
  onClick={() => { this.setState({starred: !this.state.starred}) }}
  accent
>
  {this.state.starred ? 'star' : 'star_border'}
</IconToggle>
```
Disabled
```jsx
<IconToggle 
  className="material-icons" 
  onClick={() => { this.setState({starred: !this.state.starred}) }}
  disabled
>
  {this.state.starred ? 'star' : 'star_border'}
</IconToggle>
```
