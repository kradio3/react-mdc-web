import React, {PropTypes} from 'react'
import Textfield from '../../../../src/Textfield/Textfield'

class Disabled extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={city: ''};
  }

  render () {
    return (
      <Textfield
        floatingLabel="City"
        disabled
        value={this.state.city}
        onChange={({target : {value : city}}) => {
          this.setState({ city })
        }}
      />
    )
  }
}
export default Disabled;
