import React, {PropTypes} from 'react'
import Elevation from '../../../../src/Elevation/Elevation'
import Button from '../../../../src/Button/Button'

class Default extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={level: 4};
  }

  render () {
    const { level } = this.state;
    return (
      <div style={{margin: '16px'}}>
        <Elevation 
          style={{marginRight: '16px', padding: '16px', width: '200px', display: 'inline-block'}}
          z={level} 
        >
          {'lift up for 4dp'} 
        </Elevation>
        <Elevation 
          style={{margin: '16px', padding: '16px', width: '200px', display: 'inline-block'}}
          transition
          z={level} 
        >
          {'transition for 4dp'} 
        </Elevation>
        <div>
          <Button 
            raised
            onClick={() => {
              this.setState({level: level===0?4:0});
            }}
          >Toggle level</Button>
        </div>
      </div>
    )
  }
}
export default Default;
