import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const ROOT = 'mdc-temporary-drawer';

const cssClasses = {
  ROOT,
  DRAWER_SELECTOR: `${ROOT}__drawer`,
  HEADER: `${ROOT}__header`,
  OPEN: `${ROOT}--open`,
  ANIMATING: `${ROOT}--animating`,
  RIGHT: `${ROOT}--right`,
};

class Temporary extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    target: PropTypes.string,
    header: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  };

  static handleDrawerClick(event) {
    event.stopPropagation();
  }

  constructor(props) {
    super(props);
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.handleShadeClick = this.handleShadeClick.bind(this);
    this.handleDrawerRef = this.handleDrawerRef.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.state = {};
  }

  componentDidMount() {
    const toggle = document.getElementById(this.props.target);
    if (toggle) {
      toggle.addEventListener('click', this.handleMenuToggle);
    }
  }

  handleMenuToggle(event) {
    event.stopPropagation();
    if (this.state.open) {
      this.close();
    } else {
      this.open();
    }
  }

  handleDrawerRef(nativeDrawer) {
    this.drawer = nativeDrawer;
  }

  handleShadeClick() {
    this.close();
  }

  open() {
    this.drawer.addEventListener('transitionend', this.handleTransitionEnd);
    this.setState({ open: true, animating: true });
  }

  close() {
    this.setState({ open: false, animating: true });
  }

  handleTransitionEnd() {
    this.drawer.removeEventListener('transitionend', this.handleTransitionEnd);
    this.setState({ animating: false });
  }

  render() {
    const { className, children, ...otherProps } = this.props;
    const { open, animating } = this.state;

    const childs = children.map(child => React.cloneElement(child, { temporary: true }));

    return (
      <aside
        className={classnames(cssClasses.ROOT, {
          [cssClasses.OPEN]: open,
          [cssClasses.ANIMATING]: animating,
        }, className)}
        {...otherProps}
        onClick={this.handleShadeClick}
      >
        <nav
          className={cssClasses.DRAWER_SELECTOR}
          onClick={Temporary.handleDrawerClick}
          ref={this.handleDrawerRef}
        >
          { childs }
        </nav>
      </aside>
    );
  }
}

export default Temporary;
