import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {ExpansionPanel, Panel} from '../../../../src/ExpansionPanel';

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  };


  componentDidMount() {
    const container = document.getElementById('expansionPanels');
    ReactDOM.render(this.renderExpansionPanels(), container);
  }

  renderExpansionPanels() {
    return (
        <ExpansionPanel >
          <Panel title="Panel 1">First panel!</Panel>
          <Panel title="Panel 2">Second panel!</Panel>
          <Panel title="Panel 3">Third panel!</Panel>
        </ExpansionPanel>
    );
  }

  render() {
    return (
        <div>
          {this.props.children}
        </div>
    );
  }
}
export default Template;
