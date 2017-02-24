---
title: "Grid"
---

```react-snippet
desktop-grid
```
```jsx
<Grid>
  <Cell col={1}> 1 </Cell>
  <Cell col={1}> 1 </Cell>
  <Cell col={1}> 1 </Cell>
  <Cell col={1}> 1 </Cell>
  <Cell col={1}> 1 </Cell>
  <Cell col={1}> 1 </Cell>
  <Cell col={1}> 1 </Cell>
  <Cell col={1}> 1 </Cell>
  <Cell col={1}> 1 </Cell>
  <Cell col={1}> 1 </Cell>
  <Cell col={1}> 1 </Cell>
  <Cell col={1}> 1 </Cell>
</Grid>
<Grid>
  <Cell col={3}> 3 </Cell>
  <Cell col={3}> 3 </Cell>
  <Cell col={3}> 3 </Cell>
  <Cell col={3}> 3 </Cell>
</Grid>
<Grid>
  <Cell col={6} tablet={8}> 6 (tablet 8) </Cell>
  <Cell col={4} tablet={6}> 4 (tablet 6) </Cell>
  <Cell col={2} phone={4}> 2 (phone 4) </Cell>
</Grid>
```

### Desktop mode
In default desktop mode Grid has 12 columns

```jsx
<Grid>
  <Cell col={4}>4</Cell>
  <Cell col={4}>4</Cell>
  <Cell col={4}>4</Cell>
</Grid>
```

### Tablet mode
In tablet mode Grid has 8 columns
```jsx
<Grid>
  <Cell tablet={4}>4</Cell>
  <Cell tablet={4}>4</Cell>
</Grid>
```

### Phone mode
In phone mode Grid has 4 columns
```jsx
<Grid>
  <Cell phone={2}>2</Cell>
  <Cell phone={2}>2</Cell>
</Grid>
```
