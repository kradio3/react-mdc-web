import React, {PropTypes} from 'react'
import Toolbar from '../../../../src/Toolbar/Toolbar'
import ToolbarSection from '../../../../src/Toolbar/ToolbarSection'
import ToolbarTitle from '../../../../src/Toolbar/ToolbarTitle'

class Normal extends React.PureComponent {

  render () {
    return (
          <div style={{height: '300px', width: '500px', position: 'relative', overflow: 'auto'}}>
            <Toolbar>
              <ToolbarSection align="start">
                <ToolbarTitle>Title</ToolbarTitle>
              </ToolbarSection>
            </Toolbar>
            <div style={{height: '300px'}}>Content</div> 
          </div>
    )
  }
}
export default Normal;
