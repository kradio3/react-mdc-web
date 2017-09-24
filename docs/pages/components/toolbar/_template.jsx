import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Normal from './_Normal'
import Fixed from './_Fixed'
import Sections from './_Sections'
import Waterfall from './_Waterfall'
import Flexible from './_Flexible'
import WaterfallFlexible from './_WaterfallFlexible'
import WaterfallFixedLastRowOnly from './_WaterfallFixedLastRowOnly'

class Template extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    const defaultContainer = document.getElementById("normal-toolbar");
    ReactDOM.render(<Normal/>, defaultContainer);

    const fixedContainer = document.getElementById("fixed-toolbar");
    ReactDOM.render(<Fixed/>, fixedContainer);

    const waterfallContainer = document.getElementById("waterfall-toolbar");
    ReactDOM.render(<Waterfall/>, waterfallContainer);

    const flexibleContainer = document.getElementById("flexible-toolbar");
    ReactDOM.render(<Flexible/>, flexibleContainer);

    const waterfallFlexibleContainer = document.getElementById("waterfall-flexible-toolbar");
    ReactDOM.render(<WaterfallFlexible/>, waterfallFlexibleContainer);

    const waterfallFixedLastRowOnlyContainer = document.getElementById("waterfall-fixed_last_row_only-toolbar");
    ReactDOM.render(<WaterfallFixedLastRowOnly/>, waterfallFixedLastRowOnlyContainer);

    const sectionsContainer = document.getElementById("sections");
    ReactDOM.render(<Sections/>, sectionsContainer);
  } 

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
export default Template;
