import React, {PropTypes} from 'react'
import ToolbarHoc from './_ToolbarHoc'
import Toolbar from '../../../../src/Toolbar/Toolbar'

class Waterfall extends React.PureComponent {

  render () {
    return (
      <Toolbar 
        waterfall 
        fixed
        {...this.props}
      />
    )
  }
}
export default ToolbarHoc(Waterfall);
