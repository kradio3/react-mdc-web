import React, {PropTypes} from 'react'
import ReactDOMServer from 'react-dom/server'
import Toolbar from '../../../../src/Toolbar/Toolbar'
import ToolbarSection from '../../../../src/Toolbar/ToolbarSection'
import ToolbarTitle from '../../../../src/Toolbar/ToolbarTitle'
import Content from '../../../../src/Content/Content'

class Fixed extends React.PureComponent {

  renderToolbar() {
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/material-components-web@0.5.0/dist/material-components-web.min.css"/>
          </head>
          <body className= "mdc-typography">
          <div style={{height: '300px', position: 'relative', overflow: 'auto'}}>
            <Toolbar fixed>
              <ToolbarSection align="start">
                <ToolbarTitle>Title</ToolbarTitle>
              </ToolbarSection>
            </Toolbar>
            <Content 
              className="mdc-toolbar__fixed-adjust mdc-toolbar-fixed-adjust"
            >
              Content
            </Content> 
          </div>
          </body>
        </html>
        )
        }

        render () {
          return (
              <iframe
                style={{border: '1px solid #e4e4e4'}}
                width="500px"
                height="300px"
                ref={(iframe)=>{
                  let doc = iframe.contentDocument;
                  doc.open;
                  let toolbar = ReactDOMServer.renderToString(this.renderToolbar());

                  doc.write(toolbar);
                  doc.close();
                }}
              >
              </iframe>
          )
        }
        }
        export default Fixed;
