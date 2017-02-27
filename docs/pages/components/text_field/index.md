---
title: "Text Field"
---

Text field with floating label
```jsx
<Textfield
  floatingLabel="City"
  value={this.state.city}
  onChange={({target : {value : city}}) => {
      this.setState({ city })
    }}
/>
```
