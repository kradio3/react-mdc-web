import React, {PropTypes} from 'react'
import Headline from '../../../../src/Typography/Headline'

class AdjustMargin extends React.PureComponent {

  render () {
    const style = {border: '1px solid #e0e0e0', margin: '24px'};

    return (
      <div>
        <div
          style={style}
        >
          <Headline>
            Normal margins
          </Headline>
        </div>
        <div
          style={style}
        >
          <Headline adjustMargin>
            Adjusted margins
          </Headline>
        </div>
      </div>
    )
  }
}
export default AdjustMargin;
