---
title: "Select Field"
---

```react-snippet
select_field
```
```jsx
onChange({ target }) {
    this.setState({ selected: target.value });
 }

<SelectField
    onChange={this.onChange.bind(this)}
    value={this.state.selected}
>
  <Option value="first">First select field </Option>
  <Option value="second">Second select field</Option>
  <Option value="third">Third select field </Option>
</SelectField>
```
