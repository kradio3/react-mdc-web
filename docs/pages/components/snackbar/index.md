---
title: "Snackbar"
---
Snackbar with single line of text
```jsx
<Snackbar 
  onTimeout={() => {this.setState({snackbar: false});}}
  open={this.state.snackbar}
>
  Document modified
</Snackbar>
```

You can add a single action to snackbar. When user clicks on action button, ```onClick``` callback will be fired
```jsx
<Snackbar 
  action="undo"
  onClick={(event) => { console.log(event) }}
  onTimeout={() => { this.setState({snackbar: false}); }}
  open={this.state.snackbar}
>
  Document modified
</Snackbar>
```

Snackbar with multiline text
```jsx
<Snackbar 
  multiline
  onTimeout={() => { this.setState({snackbar: false}); }}
  open={this.state.snackbar}
>
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
</Snackbar>
```

In multiline snackbar you can place action button below the text
```jsx
<Snackbar 
  action="undo"
  actionOnBottom
  onClick={(event) => { console.log(event) }}
  multiline
  onTimeout={() => { this.setState({snackbar: false}); }}
  open={this.state.snackbar}
>
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
</Snackbar>
```

Default timeout is 2750 ms. But you can override it by ```timeout``` property
```jsx
<Snackbar 
  timeout={5000}
  onTimeout={() => {this.setState({snackbar: false});}}
  open={this.state.snackbar}
>
  Loading complete
</Snackbar>
```
