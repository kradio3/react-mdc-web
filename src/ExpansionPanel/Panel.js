import React from 'react';
import classnames from 'classnames';

import Icon from '../Icon/Icon';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  onClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  renderExpanded() {
    if (this.state.expanded) {
      return <div>
        {this.props.children}
      </div>;
    }
  }

  render() {
    const listStyles = {
      padding: '0 24px',
      border: '1px solid rgba(0, 0, 0, .12)',
      borderRadius: '2px',
    };
    const expandedStyle = {
      paddingBottom: '16px',
      ...listStyles
    };
    const collapsedStyle = {
      ...listStyles
    };
    const expandedStyles = this.state.expanded ? expandedStyle : collapsedStyle;
    return <li
        key="li"
        className={classnames(
            { 'mdc-list-item': !this.state.expanded }
        )}
        style={expandedStyles}
    >
      <div
          onClick={this.onClick.bind(this)}
          className={classnames('mdc-list-item')}
          style={{
            width: '100%',
            height: '48px'
          }}
      >
        {this.props.title}
        <Icon
            name={this.state.expanded ? 'expand_less' : 'expand_more'}
            className={classnames('mdc-list-item__end-detail')}
        />
      </div>

      {this.renderExpanded()}
    </li>;
  }
}