import React, {PropTypes} from 'react'
import Toolbar from '../../../../src/Toolbar/Toolbar'
import ToolbarSection from '../../../../src/Toolbar/ToolbarSection'
import ToolbarTitle from '../../../../src/Toolbar/ToolbarTitle'

class Normal extends React.PureComponent {

  render () {
    return (
      <Toolbar style={{width: '500px'}}>
        <ToolbarSection align="start">
          Start
        </ToolbarSection>
        <ToolbarSection>
          Center
        </ToolbarSection>
        <ToolbarSection align="end">
          End
        </ToolbarSection>
      </Toolbar>
    )
  }
}
export default Normal;
