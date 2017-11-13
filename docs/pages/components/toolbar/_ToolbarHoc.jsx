import React, {PropTypes} from 'react'
import ReactDOMServer from 'react-dom/server'
import Toolbar from '../../../../src/Toolbar/Toolbar'
import ToolbarSection from '../../../../src/Toolbar/ToolbarSection'
import ToolbarRow from '../../../../src/Toolbar/ToolbarRow'
import ToolbarTitle from '../../../../src/Toolbar/ToolbarTitle'
import Content from '../../../../src/Content/Content'
import Icon from '../../../../src/Icon/Icon'
import Frame from 'react-frame-component'

class InnerFrame extends React.Component {
  static contextTypes = {
    window: PropTypes.any,
    document: PropTypes.any
  }

  renderToolbar(windowContext) {
    const WrappedComponent = this.props.wrappedComponent;
    return (
      <WrappedComponent windowContext={this.context.window}>
        <ToolbarRow>
          <ToolbarSection align="start" style={{height:'56px'}}>
            <Icon 
              className="mdc-toolbar__menu-icon" 
              name="menu"
            >
              menu
            </Icon>
            <ToolbarTitle>Title</ToolbarTitle>
          </ToolbarSection>
          <ToolbarSection align="end" style={{height:'56px'}}>
            <Icon 
              className="mdc-toolbar__icon" 
              name="file_download"
            />
            <Icon 
              className="mdc-toolbar__icon" 
              name="print"
            />
            <Icon 
              className="mdc-toolbar__icon" 
              name="bookmark"
            />
          </ToolbarSection>
        </ToolbarRow>
      </WrappedComponent>
    );
  }

  render() {
    return (
      <div>
        {this.renderToolbar()}
        <Content fixed>
          <p style={{padding: '16px'}}>
            Nullam faucibus ex id posuere interdum. Integer nec sem nec mi imperdiet elementum. Fusce turpis tortor, vestibulum nec nunc nec, egestas eleifend tortor. Nam ut urna at ex auctor congue. Nulla orci lorem, interdum vel ipsum sit amet, tincidunt efficitur leo. Nam eu metus vitae leo posuere interdum sed nec dui. Mauris est magna, efficitur et mollis molestie, pharetra sit amet metus. Morbi quam ex, eleifend eget libero vel, semper convallis quam. In eu erat congue, lobortis ligula quis, scelerisque lorem.

          </p>
          <p style={{padding: '16px'}}>
            Cras ut felis dui. Vivamus dapibus tortor diam, et tincidunt tellus interdum eget. Fusce gravida ultricies elementum. Morbi porta turpis ac nisi maximus mollis. Vestibulum posuere lacinia sapien ut ullamcorper. Integer iaculis libero orci, et sollicitudin ipsum condimentum sed. Mauris dapibus lectus vel felis eleifend, sit amet scelerisque tellus commodo. Quisque tincidunt tempus congue. Suspendisse sed viverra mauris. In at sagittis nunc. Curabitur sagittis commodo velit ac dignissim. Suspendisse potenti. Suspendisse libero purus, malesuada at luctus eget, laoreet nec augue. Donec nunc ipsum, mattis id bibendum ut, sagittis in elit. Morbi vel lacus vitae quam mattis egestas id in nisl. Nullam vitae sollicitudin purus.

          </p>
          <p style={{padding: '16px'}}>
            Curabitur at mauris vel ligula pellentesque ullamcorper ut sit amet enim. Nunc pharetra ornare est at convallis. Nam ac cursus nibh, et vestibulum nunc. Curabitur vel gravida purus, eget finibus tellus. Sed rutrum risus iaculis libero tempus, quis cursus sem condimentum. Pellentesque convallis interdum neque sit amet imperdiet. Cras faucibus eget velit id bibendum. Pellentesque pellentesque risus non posuere malesuada. Donec eros metus, accumsan id nunc eget, tristique auctor mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer non massa eget orci elementum mattis. Quisque nec accumsan tortor. Quisque ornare neque ut placerat faucibus. Ut mollis turpis a varius condimentum.
          </p>
        </Content> 
      </div>
    );
  }
}

const ToolbarHoc = WrappedComponent => class extends React.PureComponent {

  render () {
    return (
      <Frame
        initialContent='<!DOCTYPE html><html><head><link rel="stylesheet" href="https://unpkg.com/material-components-web@0.23.0/dist/material-components-web.min.css"/> <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/> </head><body class= "mdc-typography" style="margin:0"> <div></div></body></html>' style={{border: '1px solid #e4e4e4', width: '320px', height: '500px'}}
      >
      <InnerFrame 
        wrappedComponent={WrappedComponent}
      />
      </Frame>
    )
  }
}
export default ToolbarHoc;
