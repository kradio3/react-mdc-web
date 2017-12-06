import React from 'react';
import Elevation from '../Elevation/Elevation';
import classnames from 'classnames';
export default class ExpansionPanels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: !props.expandable
    };
  }

  render() {

    return <Elevation
        z={4}
    >
      <ul
          className={classnames(
              'mdc-list',
              this.props.className
          )}
          style={{
            padding: 0,
            margin: 0,
            minWidth: '200px'
          }}
      >
        {this.props.children}
      </ul>
    </Elevation>;
  }
}

