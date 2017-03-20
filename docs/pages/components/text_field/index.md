---
title: "Text Field"
---
```react-snippet
text-field-label
```

```jsx
<Cell col={4}>
  <Textfield
    floatingLabel="City"
    value={this.state.city}
    onChange={({target : {value : city}}) => {
      this.setState({ city })
    }}
  />
</Cell>

{/* Disabled field */}
<Cell col={4}>
  <Textfield
    disabled
    floatingLabel="State"
    value={this.state.state}
    onChange={({target : {value : state}}) => {
      this.setState({ state })
    }}
  />
</Cell>

{/* Required field */}
<Cell col={4}>
  <Textfield
    floatingLabel="Zip"
    required
    value={this.state.zip}
    onChange={({target : {value : zip}}) => {
      this.setState({ zip })
    }}
  />
</Cell>
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
