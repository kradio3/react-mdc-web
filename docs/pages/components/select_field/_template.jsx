import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Option, SelectField} from '../../../../src/SelectField';

class Template extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    };
  }

  componentDidMount() {
    const container = document.getElementById('select_field');
    ReactDOM.render(this.renderSelectField(), container);
  }

  onChange({ target }) {
    this.setState({ selected: target.value });
  }

  renderSelectField() {
    return (
        <SelectField
            onChange={this.onChange.bind(this)}
            value={this.state.selected}
        >
          <Option value="first">First select field </Option>
          <Option value="second">Second select field</Option>
          <Option value="third">Third select field </Option>
        </SelectField>
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
