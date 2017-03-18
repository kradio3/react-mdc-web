---
title: "Text Field"
---

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
  floatingLabel="Disabled field"
  value={this.state.city}
  onChange={({target : {value : city}}) => {
      this.setState({ city })
    }}
/>
```

### Help text
Use a help text for additional information about the field. Help text will be shown below the field if it has focus
```react-snippet
text-field-helptext
```
```jsx
<Textfield
  floatingLabel="Your product or service"
  helptext="For example, flowers or used cars"
  value={this.state.product}
  onChange={({target : {value : product}}) => {
    this.setState({ product })
  }}
/>
```
### Persistent help text
Help text will be visible without focus if property ```helptextPersistent``` is ```true```
```react-snippet
text-field-peristent
```
```jsx
<Textfield
  floatingLabel="Your product or service"
  helptext="For example, flowers or used cars"
  helptextPersistent
  value={this.state.product}
  onChange={({target : {value : product}}) => {
    this.setState({ product })
  }}
/>
```
### Validation message
You can use help text as validation message. It will be shown if field validation fails. 
Try to input less than 8 characters in the field below
```react-snippet
text-field-validation
```
```jsx
<Textfield
  floatingLabel="Password"
  type="password"
  minLength={8}
  helptext="Your password must be at least 8 characters"
  helptextValidation
  value={this.state.password}
  onChange={({target : {value : password}}) => {
    this.setState({ password })
  }}
/>
```
