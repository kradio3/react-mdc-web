import React, {PropTypes} from 'react'
import Button from '../../../../src/Button/Button'

class Counter extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={ counter: 0 };
  }

  render () {
    return (
      <div style={{margin: '16px 0'}}>
        <Button 
          raised 
          primary
          onClick={() => {
            let { counter } = this.state;
            counter ++;
            this.setState({ counter });
          }}
        >
          Increment
        </Button>
        <span style={{marginLeft: '24px'}}>{this.state.counter}</span>
      </div>
    )
  }
}
export default Counter;
