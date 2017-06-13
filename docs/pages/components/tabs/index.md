---
title: "Tabs"
---

```react-snippet
default-tabs
```
```jsx
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
```
