import React from 'react';
import MenuAnchor from '../Menu/MenuAnchor';
import Menu from '../Menu/Menu';
import PropTypes from 'prop-types';

export default class SelectField extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selected: 'Selected Text',
    };
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  getSelectedText() {
    const selected = this.props.options.find(
        x => x.id === this.state.selected
    );
    if (selected) {
      return selected.text;
    }
    else return this.state.selected;
  }

  render() {
    return <div
        className='mdc-select'
        onClick={this.toggleOpen.bind(this)}

    >
      <MenuAnchor >

      <span
          className="mdc-select__selected-text"
      >
        {this.state.selected}
      </span>


        <Menu
            open={this.state.open}
            onClose={this.toggleOpen.bind(this)}
            style={{marginTop: '20px'}}


        >
          {this.props.children}
        </Menu>
      </MenuAnchor>
    </div>;
  }
}