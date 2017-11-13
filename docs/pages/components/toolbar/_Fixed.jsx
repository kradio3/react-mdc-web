import React, {PropTypes} from 'react'
import ToolbarHoc from './_ToolbarHoc'
import Toolbar from '../../../../src/Toolbar/Toolbar'

class Fixed extends React.PureComponent {

  render () {
    return (
      <Toolbar 
        fixed 
        {...this.props}
      />
    )
  }
}
export default ToolbarHoc(Fixed);
