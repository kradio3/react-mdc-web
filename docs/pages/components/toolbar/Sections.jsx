import React, {PropTypes} from 'react'
import Toolbar from '../../../../src/Toolbar/Toolbar'
import ToolbarSection from '../../../../src/Toolbar/ToolbarSection'
import ToolbarTitle from '../../../../src/Toolbar/ToolbarTitle'
import ToolbarRow from '../../../../src/Toolbar/ToolbarRow'

class Sections extends React.PureComponent {

  render () {
    return (
      <Toolbar style={{width: '500px'}}>
        <ToolbarRow>
          <ToolbarSection align="start">
            Start
          </ToolbarSection>
          <ToolbarSection>
            Center
          </ToolbarSection>
          <ToolbarSection align="end">
            End
          </ToolbarSection>
        </ToolbarRow>
      </Toolbar>
    )
  }
}
export default Sections;
