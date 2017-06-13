import React, {PropTypes} from 'react'
import IconToggle from '../../../../src/IconToggle/IconToggle'
import Grid from '../../../../src/Grid/Grid'
import {Tabbar, Tab} from '../../../../src/Tabs'

class Default extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={activeTab: 1};
  }

  render () {
    return (
      <Tabbar>
        <Tab 
          active={this.state.activeTab===1}
          onClick={() => {this.setState({activeTab:1})}}
        >
          Star destroyers
        </Tab>
        <Tab 
          active={this.state.activeTab===2}
          onClick={() => {this.setState({activeTab:2})}}
        >
          Assault ships
        </Tab>
        <Tab 
          active={this.state.activeTab===3}
          onClick={() => {this.setState({activeTab:3})}}
        >
          Cruisers
        </Tab>
        <span className="mdc-tab-bar__indicator"></span>
      </Tabbar>

    )
  }
}
export default Default;
