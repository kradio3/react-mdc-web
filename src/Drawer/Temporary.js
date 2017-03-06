import React, { Component, PropTypes } from 'react';
import DrawerShade from './DrawerShade';
import DrawerPane from './DrawerPane';

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

  static isWrongPointer(pointerType) {
    return pointerType && pointerType !== 'touch';
  }

  constructor(props) {
    super(props);
    this.handleShadeClick = this.handleShadeClick.bind(this);
    this.handleTransitionend = this.handleTransitionend.bind(this);
    this.handleTouchstart = this.handleTouchstart.bind(this);
    this.handleTouchmove = this.handleTouchmove.bind(this);
    this.handleTouchend = this.handleTouchend.bind(this);
    this.close = this.close.bind(this);
    this.state = {};
  }

  handleShadeClick() {
    this.close();
  }

  handleTouchstart({ pointerType, touches, pageX }, drawerWidth) {
    if (!this.props.open) {
      return;
    }

    if (Temporary.isWrongPointer(pointerType)) {
      return;
    }

    this.startX = touches ? touches[0].pageX : pageX;
    this.touchingSideNav = true;
    this.drawerWidth = drawerWidth;
    this.setState({ currentX: this.startX });
  }

  handleTouchmove({ pointerType, touches, pageX }) {
    if (Temporary.isWrongPointer(pointerType)) {
      return;
    }
    const currentX = touches ? touches[0].pageX : pageX;
    this.setState({ currentX });
  }

  handleTouchend({ pointerType }) {
    if (Temporary.isWrongPointer(pointerType)) {
      return;
    }
    const newPosition = this.calculateDrawerPosition();
    this.touchingSideNav = false;

    this.setState({animating: true});

    // Did the user close the drawer by more than 50%?
    if (Math.abs(newPosition / this.drawerWidth) >= 0.5) {
      this.close();
    }
  }

  close() {
    const { onClose } = this.props;
    (typeof onClose == "function") && onClose();
  }

  handleTransitionend() {
    this.setState({ animating: false });
  }

  calculateDrawerPosition() {
    if (this.touchingSideNav) {
      return Math.min(0, this.state.currentX - this.startX);
    }
    return null;
  }

  calculateShadeOpacity(position) {
    if (this.touchingSideNav) {
      return Math.max(0, 1 + (1 * (position / this.drawerWidth)));
    }
    return null;
  }

  componentWillReceiveProps (newProps) {
    if (this.props.open != newProps.open) {
      this.setState({animating: true});
    }
  }

  render() {
    const { className, children, open, ...otherProps } = this.props;
    const { animating } = this.state;

    const childs = React.Children.map(children, child =>
      React.cloneElement(child, { temporary: true }),
    );

    const position = this.calculateDrawerPosition();
    const opacity = this.calculateShadeOpacity(position);

    return (
      <DrawerShade
        animating={animating}
        className={className}
        onClick={this.handleShadeClick}
        onTouchend={this.handleTouchend}
        onTouchmove={this.handleTouchmove}
        opacity={opacity}
        open={open}
        {...otherProps}
      >
        <DrawerPane
          onClick={Temporary.handleDrawerClick}
          onTouchstart={this.handleTouchstart}
          animating={animating}
          onTransitionend={this.handleTransitionend}
          position={position}
        >
          {childs}
        </DrawerPane>
      </DrawerShade>
    );
  }
}

export default Temporary;
