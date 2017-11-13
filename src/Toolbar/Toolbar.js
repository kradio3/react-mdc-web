import PropTypes from 'prop-types';
import React, { Children, cloneElement } from 'react';
import classnames from 'classnames';
import ToolbarRow from './ToolbarRow';

const ROOT = 'mdc-toolbar';
const FIXED = `${ROOT}--fixed`;
const WATERFALL = `${ROOT}--waterfall`;
const FIXED_LAST_ROW_ONLY = `${ROOT}--fixed-lastrow-only`;
const FLEXIBLE = `${ROOT}--flexible`;
const FLEXIBLE_DEFAULT_BEHAVIOR = `${ROOT}--flexible-default-behavior`;

const FLEXIBLE_MAX = `${ROOT}--flexible-space-maximized`;
const FLEXIBLE_MIN = `${ROOT}--flexible-space-minimized`;

const TOOLBAR_MOBILE_BREAKPOINT = 600;
const TOOLBAR_ROW_HEIGHT = 64;
const TOOLBAR_ROW_MOBILE_HEIGHT = 56;

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
    windowContext: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  }

  constructor(props) {
    super(props);
    this.state = { flexibleExpansionRatio: 0 };
    this.handleScroll = this.handleScroll.bind(this);
    this.calculations = { toolbarRowHeight: 0 };
  }

  componentDidMount() {
    this.getWindow().addEventListener('scroll', this.handleScroll);
    this.initKeyRatio();
    this.setKeyHeights();
  }

  componentWillUnmount() {
    this.getWindow().removeEventListener('scroll', this.handleScroll);
  }

  getFlexibleExpansionRatio() {
    // To prevent division by zero when there is no flexibleExpansionHeight
    const delta = 0.0001;
    const { scrollTop } = this.state;
    const { flexibleExpansionHeight } = this.calculations;
    return Math.max(0, 1 - (scrollTop / (flexibleExpansionHeight + delta)));
  }

  getWindow() {
    const { windowContext } = this.props;
    if (windowContext) {
      return windowContext;
    }
    return window;
  }

  getRowHeight() {
    const breakpoint = TOOLBAR_MOBILE_BREAKPOINT;
    const viewPortWidth = this.getWindow().innerWidth;
    return viewPortWidth < breakpoint ? TOOLBAR_ROW_MOBILE_HEIGHT : TOOLBAR_ROW_HEIGHT;
  }

  setKeyHeights() {
    const newToolbarRowHeight = this.getRowHeight();
    const { toolbarRatio, toolbarRowHeight } = this.calculations;
    if (newToolbarRowHeight !== this.calculations.toolbarRowHeight) {
      this.calculations.toolbarRowHeight = newToolbarRowHeight;
      this.calculations.toolbarHeight = toolbarRatio * toolbarRowHeight;
      this.calculations.flexibleExpansionHeight =
        this.calculations.flexibleExpansionRatio * this.calculations.toolbarRowHeight;
      this.calculations.maxTranslateYDistance =
        this.calculations.maxTranslateYRatio * this.calculations.toolbarRowHeight;
      this.calculations.scrollThreshold =
        this.calculations.scrollThresholdRatio * this.calculations.toolbarRowHeight;
    }
  }

  initKeyRatio() {
    const toolbarRowHeight = this.getRowHeight();
    const firstRowMaxRatio = this.calculations.firstRowHeight / toolbarRowHeight;
    this.calculations.toolbarRatio = this.calculations.rootOffsetHeight / toolbarRowHeight;
    this.calculations.flexibleExpansionRatio = firstRowMaxRatio - 1;
    this.calculations.maxTranslateYRatio =
      this.fixedLastrow ? this.calculations.toolbarRatio - firstRowMaxRatio : 0;
    this.calculations.scrollThresholdRatio =
      (this.fixedLastrow ? this.calculations.toolbarRatio : firstRowMaxRatio) - 1;
  }

  handleScroll() {
    this.setState({ scrollTop: this.getWindow().pageYOffset });
  }

  render() {
    const { className, fixed, waterfall, fixedLastRowOnly, flexible, flexibleDefaultBehavior,
      children, windowContext, ...otherProps } = this.props;

    const firstRowFound = false;
    const childs = Children.map(children, (child) => {
      if (!firstRowFound && child.type === ToolbarRow) {
        return cloneElement(child, {
          onHeight: (height) => { this.calculations.firstRowHeight = height; },
        });
      }
      return child;
    });

    const flexibleExpansionRatio = this.getFlexibleExpansionRatio();

    return (
      <header
        className={classnames(ROOT, {
          [FIXED]: fixed,
          [FIXED_LAST_ROW_ONLY]: fixedLastRowOnly,
          [WATERFALL]: waterfall,
          [FLEXIBLE]: flexible,
          [FLEXIBLE_DEFAULT_BEHAVIOR]: flexibleDefaultBehavior,
          [FLEXIBLE_MAX]: flexibleExpansionRatio === 1,
          [FLEXIBLE_MIN]: flexibleExpansionRatio === 0,
        }, className)}
        ref={(native) => {
          if (native) {
            this.calculations.rootOffsetHeight = native.offsetHeight;
          }
        }}
        {...otherProps}
      >
        {childs}
      </header>
    );
  }
}
export default Toolbar;
