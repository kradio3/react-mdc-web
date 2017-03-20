import React, {PropTypes} from 'react'
import Textfield from '../../../../src/Textfield/Textfield'

class Required extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={city: ''};
  }

  render () {
    return (
      <Textfield
        floatingLabel="Required field"
        required
        value={this.state.city}
        onChange={({target : {value : city}}) => {
          this.setState({ city })
        }}
      />
    )
  }
}
export default Required;
