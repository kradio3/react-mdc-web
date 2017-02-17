---
title: "Card"
---

Text card
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
Media card
```jsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardMedia 
    style={{
      backgroundImage: 'url("/card_bg.jpg")',
      height: '300px',
      backgroundSize: 'cover',
    }}
  />
</Card>
```
