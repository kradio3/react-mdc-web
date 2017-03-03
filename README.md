# [Material components for React](https://kradio3.github.io/react-mdc-web/)
[![Maintenance Status][status-image]][status-url] [![NPM version][npm-image]][npm-url] [![Travis build][travis-image]][travis-url]

React components based on styles from [Material Design Components Web project](https://github.com/material-components/material-components-web). Components are written in React.js. Doesn't use MDC JS sources.

## Installation
From CDN
```html
<script src="https://unpkg.com/react-mdc-web/out/react-mdc-web.js"></script>
```
From package manager
```sh
npm i --save react-mdc-web
```

## Usage
```js
import React, { Component } from 'react'
import {Card, CardHeader, CardTitle, CardText, CardActions, Button} from 'react-mdc-web/lib';

class MyComponent extends Component {
  render() {
    return (
        <Card>
          <CardHeader>
            <CardTitle>
              Title goes here
            </CardTitle>
          </CardHeader>
          <CardText> 
            Lorem ipsum dolor sit amet, sint adipiscing ius eu
          </CardText>
          <CardActions>
            <Button compact>Save</Button>
            <Button compact accent>Remove</Button>
          </CardActions>
        </Card>
    );
  }
}

```
More samples could be found on the [Documentation Site](https://kradio3.github.io/react-mdc-web/)


## License
MIT, see [LICENSE](/LICENSE) for details
[status-image]: https://img.shields.io/badge/status-maintained-brightgreen.svg
[status-url]: https://github.com/kradio3/react-mdc-web

[npm-image]: https://img.shields.io/npm/v/react-mdc-web.svg
[npm-url]: https://www.npmjs.com/package/react-mdc-web

[travis-image]: https://travis-ci.org/kradio3/react-mdc-web.svg?branch=master
[travis-url]: https://travis-ci.org/kradio3/react-mdc-web

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://raw.githubusercontent.com/kradio3/react-mdc-web/master/LICENSE
