import React, {PropTypes} from 'react'
import ToolbarHoc from './_ToolbarHoc'
import Toolbar from '../../../../src/Toolbar/Toolbar'

class Normal extends React.PureComponent {
  render () {
    return (
      <Toolbar 
        {...this.props}
      />
    )
  }
}
export default ToolbarHoc(Normal);
