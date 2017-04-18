---
title: "Grid list"
---

```react-snippet
default-grid-list
```
```jsx
<GridList>
  <Tile>
    <TilePrimary>
      <TileContent src= "card_bg.jpg"/>
    </TilePrimary>
    <TileSecondary>
      <TileTitle>Tile title</TileTitle>
    </TileSecondary>
  </Tile>
  {/* ... */}
</GridList>
```

### Compact
```react-snippet
grid-list-compact
```
```jsx
<GridList compact>
  {/*...*/}
</GridList>
```

### Tile ratio
```react-snippet
grid-list-ratio
```

You can use one of recommended aspect ratio. See [ratio keylines](https://material.io/guidelines/layout/metrics-keylines.html#metrics-keylines-ratio-keylines)

```jsx
{/* 1x1, 16x9, 2x3, 3x2, 4x3, 3x4*/}
<GridList ratio="3x2">
```

### Support text
```react-snippet
grid-list-support-text
```
```jsx
<GridList twoLineCaption>
  <Tile>
    <TilePrimary>
      <TileContent src= "card_bg.jpg"/>
    </TilePrimary>
    <TileSecondary>
      <TileTitle>Tile title</TileTitle>
      <TileSupportText>Tile description</TileSupportText>
    </TileSecondary>
  </Tile>
  {/* ... */}
</GridList>
```
### Caption on header
```react-snippet
grid-list-header-caption
```
```jsx
<GridList twoLineCaption headerCaption>
  {/* ... */}
</GridList>
```

### Caption with icon
```react-snippet
grid-list-icon-caption
```
```jsx
<GridList twoLineCaption captionIconAlign="start">
  <Tile>
    <TilePrimary>
      <TileContent src= "card_bg.jpg"/>
    </TilePrimary>
    <TileSecondary>
      <Icon name="star_border"/>
      <TileTitle>Tile title</TileTitle>
      <TileSupportText>Tile description</TileSupportText>
    </TileSecondary>
  </Tile>
  {/* ... */}
</GridList>
```
