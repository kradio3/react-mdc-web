import React, {PropTypes} from 'react'
import Textfield from '../../../../src/Textfield/Textfield'
import {Grid, Cell} from '../../../../src/Grid'

class Multiline extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={description: ''};
  }

  render () {
    return (
      <Textfield
        floatingLabel="Description"
        multiline
        rows="8"
        cols="40"
        value={this.state.description}
        onChange={({target : {value : description}}) => {
          this.setState({ description })
        }}
      />
    )
  }
}
export default Multiline;
