---
title: "Layout"
---

In default desktop mode Grid has 12 columns
```jsx
<Grid>
  <Cell col={4}>4</Cell>
  <Cell col={4}>4</Cell>
  <Cell col={4}>4</Cell>
</Grid>
```

In tablet mode Grid has 8 columns
```jsx
<Grid>
  <Cell tablet={4}>4</Cell>
  <Cell tablet={4}>4</Cell>
</Grid>
```

In phone mode Grid has 4 columns
```jsx
<Grid>
  <Cell phone={2}>2</Cell>
  <Cell phone={2}>2</Cell>
</Grid>
```
