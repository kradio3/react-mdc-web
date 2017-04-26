---
title: "List"
---

### Text only
```react-snippet
list-text-only
```
```jsx
<List>
  <ListItem>Berlin, Germany</ListItem>
  <ListItem>London, UK</ListItem>
  <ListItem>Strasbourg, France</ListItem>
  <ListItem>Buenos Aires, Argentina</ListItem>
</List>
```
### Dense
```react-snippet
list-dense
```
```jsx
<List dense>
  <ListItem>Berlin, Germany</ListItem>
  <ListItem>London, UK</ListItem>
  <ListItem>Strasbourg, France</ListItem>
  <ListItem>Buenos Aires, Argentina</ListItem>
</List>
```
### Details
```react-snippet
list-detail
```
```jsx
<List style={{maxWidth: '400px'}}>
  <ListItem>
    <Icon name="star"/>
    Berlin, Germany
    <Icon name="check"/>
  </ListItem>
  <ListItem>
    <Icon name="access_time"/>
    London, UK
    <Icon name="check"/>
  </ListItem>
{/* ... */}
```
### Dividers
```react-snippet
list-divider
```
```jsx
{/* Without inset */}
<ListItem>Berlin, Germany</ListItem>
<ListDivider/>
<ListItem>Strasbourg, France</ListItem>
<ListDivider/>

{/* Inset  */}
<ListItem><Icon name="favorite_border"/>Berlin, Germany</ListItem>
<ListDivider inset />
<ListItem><Icon name="favorite_border"/>London, UK</ListItem>
<ListDivider inset />
```
### Groups
```react-snippet
list-group
```
```jsx
<ListGroup>
  <ListHeader>By city</ListHeader>
  <List>
    <ListItem>Berlin, Germany</ListItem>
    <ListItem>London, UK</ListItem>
    <ListItem>Strasbourg, France</ListItem>
    <ListItem>Buenos Aires, Argentina</ListItem>
  </List>
  <ListDivider />
  <ListHeader>By planet</ListHeader>
  <List>
    <ListItem>Mercury</ListItem>
    <ListItem>Venus</ListItem>
    <ListItem>Earth</ListItem>
    <ListItem>Mars</ListItem>
  </List>
</ListGroup>
```
