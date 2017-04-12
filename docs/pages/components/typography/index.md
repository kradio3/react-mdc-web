---
title: "Typography"
---

```react-snippet
typography-default
```
Default
```jsx
<Display4>Display4</Display4>
<Display3>Display3</Display3>
<Display2>Display2</Display2>
<Display1>Display1</Display1>
<Headline>Headline</Headline>
<Title>Title</Title>
<Subheading2>Subheading2</Subheading2>
<Subheading1>Subheading1</Subheading1>
<Body2>Body2</Body2>
<Body1>Body1</Body1>
<Caption>Caption</Caption>
```
### Change component to render
Use property ```component``` to change rendered tag. In example below Subheading2 rendered as ```span```
```react-snippet
typography-change-component
```
```jsx
<Display1>
  Display1
  <Subheading2 component="span">
    Subheading2
  </Subheading2>
</Display1>
```
### Adjust margin
```react-snippet
typography-adjust-margin
```
```jsx
<Headline adjustMargin>
  Adjusted margins
</Headline>
```
