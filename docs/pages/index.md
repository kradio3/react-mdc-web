---
title: "React-Mdc-Web"
description: "Material Design Components for React"
---

### Installation
* Library could be installed from CDN. Include the library into your html page:
  ```html
  <script src="https://unpkg.com/react-mdc-web/out/react-mdc-web.js"></script>
  ```
  Try it out on [Codepen](http://codepen.io/kradio3/pen/rjzdBp)

* Or from package manager:
  ```bash
   npm i --save react-mdc-web 
  ```
* If you are going to use Material icons, don't forget to include them:
  ```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
  ```

### Usage
* ##### Bundlers
  Import 'react-mdc-web', if you are using bundler, such as webpack or Browserify
  ```jsx
  import {Card, CardHeader, CardTitle} from 'react-mdc-web';
  ```
  
  Or default import to reduce chunks sizes:
  ```jsx
  import Card from 'react-mdc-web/lib/Card/Card';
  import CardHeader from 'react-mdc-web/lib/Card/CardHeader';
  import CardTitle from 'react-mdc-web/lib/Card/CardTitle';
  ```
* ##### UMD build
  Library is available as ReactMdcWeb in the global context.
  ```jsx
  const {Card, CardHeader, CardTitle} = ReactMdcWeb;
  const Demo = (props) => (
         <Card style={{width: '300px'}}>
            <CardHeader>
              <CardTitle>
                Hello world!
              </CardTitle>
            </CardHeader>
          </Card>
  
  );
  ReactDOM.render(<Demo />, document.getElementById('demo'))
  ```
  Try it out on [Codepen](http://codepen.io/kradio3/pen/rjzdBp)
