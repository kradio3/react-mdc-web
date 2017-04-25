import React, {PropTypes} from 'react'
import Display1 from '../../../../src/Typography/Display1'
import Subheading2 from '../../../../src/Typography/Subheading2'

class ChangeComponent extends React.PureComponent {

  render () {
    return (
      <div>
        <Display1>
          Display1
          <Subheading2 component="span">
            Subheading2
          </Subheading2>
        </Display1>
      </div>
    )
  }
}
export default ChangeComponent;
