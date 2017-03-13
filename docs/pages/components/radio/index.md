---
title: "Radio"
---
### Simple radio button
```react-snippet
simple-radio
```
```jsx
<Radio
  name="solar-system"
  value="mercury"
/>
<Radio
  name="solar-system"
  value="venus"
/>
```

### Labels
```react-snippet
labeled-radio
```
```jsx
<FormField id="radio-titania">
  <Radio
    name="uranus"
    value="Titania"
  />
  <label>Titania</label>
</FormField>
<FormField id="radio-oberon">
  <Radio
    name="uranus"
    value="Oberon"
  />
  <label>Oberon</label>
</FormField>
```
### Radio group component
You can wrap radio buttons to ```RadioGroup``` component. It's based on ```<List/>``` and calculates ```checked``` properties depending on given ```value```
```react-snippet
radio-group
```
```jsx
<RadioGroup 
  onChange={({target: {value}})=>{this.setState({saturn: value})}}
  name="saturn"
  value={this.state.saturn}
>
  <Radio value="titan">Titan</Radio>
  <Radio value="dione">Dione</Radio>
  <Radio value="tethys">Tethys</Radio>
</RadioGroup>
```
