import React, {PropTypes} from 'react'
import Radio from '../../../../src/Radio/Radio'

class Simple extends React.PureComponent {

  constructor(props){
    super(props);
  }

  render () {
    return (
      <div>
        <Radio
          name="solar-system"
          value="mercury"
        />
        <Radio
          name="solar-system"
          value="venus"
        />
      </div>
    )
  }
}
export default Simple;
