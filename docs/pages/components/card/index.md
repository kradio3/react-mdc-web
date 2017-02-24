---
title: "Card"
---

### Simple card
```react-snippet
text-card
```
```jsx
<Card>
  <CardHeader>
    <CardTitle>Title goes here</CardTitle>
    <CardSubtitle>Subtitle</CardSubtitle>
  </CardHeader>
  <CardText>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </CardText>
  <CardActions>
    <Button compact primary>action 1</Button>
    <Button compact >action 2</Button>
  </CardActions>
</Card>
```
### Media card
```react-snippet
media-card
```
```jsx
<Card>
  <CardHeader>
    <CardTitle>Title goes here</CardTitle>
  </CardHeader>
  <CardMedia 
    style={{
      backgroundImage: 'url("/card_bg.jpg")',
      height: '300px',
      backgroundSize: 'cover',
    }}
  />
  <CardText>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </CardText>
  <CardActions>
    <Button compact primary>action 1</Button>
    <Button compact >action 2</Button>
  </CardActions>
</Card>
```
