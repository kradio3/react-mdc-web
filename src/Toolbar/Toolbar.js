import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import { MDCToolbar } from '@material/toolbar/dist/mdc.toolbar';

const ROOT = 'mdc-toolbar';
const FIXED = `${ROOT}--fixed`;
const WATERFALL = `${ROOT}--waterfall`;
const FIXED_LAST_ROW_ONLY = `${ROOT}--fixed-lastrow-only`;
const FLEXIBLE = `${ROOT}--flexible`;
const FLEXIBLE_DEFAULT_BEHAVIOR = `${ROOT}--flexible-default-behavior`;

class Toolbar extends React.PureComponent {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    fixed: PropTypes.bool,
    waterfall: PropTypes.bool,
    flexible: PropTypes.bool,
    fixedLastRowOnly: PropTypes.bool,
    flexibleDefaultBehavior: PropTypes.bool,
    onChange: PropTypes.func,
  }

  componentDidMount() {
    this.toolbar = new MDCToolbar(this.node);
    if (this.props.fixed) {
      this.toolbar.fixedAdjustElement = document.querySelector(`.${ROOT}-fixed-adjust`);
    }
    this.toolbar.listen('MDCToolbar:change', (e) => { this.handleMDCToolbarChange(e); });
  }

  componentWillReceiveProps() {
    this.toolbar.fixedAdjustElement = document.querySelector(`.${ROOT}-fixed-adjust`);
  }

  componentWillUnmount() {
    this.toolbar.unlisten('MDCToolbar:change', (e) => { this.handleMDCToolbarChange(e); });
    this.toolbar.destroy();
  }

  handleMDCToolbarChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    const { className, fixed, waterfall, fixedLastRowOnly, flexible, flexibleDefaultBehavior,
      children, ...otherProps } = this.props;

    return (
      <header
        ref={(node) => { this.node = node; }}
        className={classnames(ROOT, {
          [FIXED]: fixed,
          [FIXED_LAST_ROW_ONLY]: fixedLastRowOnly,
          [WATERFALL]: waterfall,
          [FLEXIBLE]: flexible,
          [FLEXIBLE_DEFAULT_BEHAVIOR]: flexibleDefaultBehavior,
        }, className)}
        {...otherProps}
      >
        {children}
      </header>
    );
  }
}
export default Toolbar;
