import React, {PropTypes} from 'react'
import Radio from '../../../../src/Radio/Radio'
import RadioGroup from '../../../../src/Radio/RadioGroup'

class Group extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={saturn: ''};
  }

  render () {
    return (
      <RadioGroup 
        onChange={({target: {value}})=>{this.setState({saturn: value})}}
        name="saturn"
        value={this.state.saturn}
      >
        <Radio value="titan">Titan</Radio>
        <Radio value="dione">Dione</Radio>
        <Radio value="tethys">Tethys</Radio>
      </RadioGroup>
    )
  }
}
export default Group;
