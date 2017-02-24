---
title: "Text Field"
---

Text field without label
```react-snippet
text-field
```

```jsx
<Textfield
  value={this.state.city}
  onChange={({target : {value : city}}) => {
      this.setState({ city })
    }}
/>
```
Text field with floating label
```react-snippet
text-field-label
```

```jsx
<Textfield
  floatingLabel="City"
  value={this.state.city}
  onChange={({target : {value : city}}) => {
      this.setState({ city })
    }}
/>
```
Disabled field
```react-snippet
text-field-disabled
```

```jsx
<Textfield
  disabled
  floatingLabel="City"
  value={this.state.city}
  onChange={({target : {value : city}}) => {
      this.setState({ city })
    }}
/>
```
