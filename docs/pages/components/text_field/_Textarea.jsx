import React, {PropTypes} from 'react'
import Textfield from '../../../../src/Textfield/Textfield'
import {Grid, Cell} from '../../../../src/Grid'

class Textarea extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={description: ''};
  }

  render () {
    return (
      <Textfield
        floatingLabel="Description"
        textarea
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
export default Textarea;
