---
title: "Slider"
---
### Continuous
```react-snippet
default-slider
```
Slider with default setting: continuous with default min and max
```jsx
<FormField id="continous-slider">
  <Slider
    value={this.state.value}
    onChange={(value)=>{
      this.setState({value})
    }}
    onInput={(inputValue)=>{
      this.setState({inputValue})
    }}
  />
</FormField>
```

### Disabled
```react-snippet
disabled-slider
```
Use ```disabled``` property to disable slider
```jsx
<FormField id="disabled-slider">
  <Slider
    value={this.state.value}
    disabled
  />
  />
</FormField>
```

### Discrete Slider
```react-snippet
discrete-slider
```
Use the ```discrete``` and ```step``` to create a discrete slider.
```jsx
<FormField id="discrete-slider">
  <Slider
    value={this.state.value}
    min={-50}
    max={50}
    step={5}
    discrete
    onChange={(value)=>{
      this.setState({value})
    }}
    onInput={(inputValue)=>{
      this.setState({inputValue})
    }}
  />
  />
</FormField>
```


### Discrete Slider with Markers
```react-snippet
discrete-with-markers-slider
```
Use ```showMarkers``` property to show markers for discrete slider
```jsx
<FormField id="discrete-with-markers-slider">
  <Slider
    value={this.state.value}
    min={-50}
    max={50}
    step={5}
    discrete
    showMarkers
    onChange={(value)=>{
      this.setState({value})
    }}
    onInput={(inputValue)=>{
      this.setState({inputValue})
    }}
  />
  />
</FormField>
```
