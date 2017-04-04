import React, {PropTypes} from 'react'
import Toolbar from '../../../../src/Toolbar/Toolbar'
import ToolbarSection from '../../../../src/Toolbar/ToolbarSection'
import ToolbarTitle from '../../../../src/Toolbar/ToolbarTitle'
import ToolbarRow from '../../../../src/Toolbar/ToolbarRow'

class Normal extends React.PureComponent {

  render () {
    return (
      <div style={{height: '300px', width: '500px', position: 'relative', overflow: 'auto'}}>
        <Toolbar>
          <ToolbarRow>
            <ToolbarSection align="start">
              <ToolbarTitle>Title</ToolbarTitle>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <div style={{height: '300px'}}>Content</div> 
      </div>
    )
  }
}
export default Normal;
