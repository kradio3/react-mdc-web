import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { ROOT } from './constants';

class DrawerPane extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onTouchstart: PropTypes.func,
    onTransitionend: PropTypes.func,
    animating: PropTypes.bool,
    position: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.handleTransitionend = this.handleTransitionend.bind(this);
    this.handleTouchstart = this.handleTouchstart.bind(this);
  }

  componentDidMount() {
    const { onClick } = this.props;
    this.native.addEventListener('click', onClick);
    this.native.addEventListener('touchstart', this.handleTouchstart);
  }

  componentWillReceiveProps(next) {
    const { animating, position } = this.props;
    if (animating !== next.animating && next.animating) {
      this.native.addEventListener('transitionend', this.handleTransitionend);
    }

    if (position !== next.position) {
      this.setTransformPosition(next.position);
    }
  }

  componentWillUnmount() {
    const { onClick } = this.props;
    this.removeEventListener('click', onClick);
    this.removeEventListener('touchstart', this.handleTouchstart);
  }

  getTransformPropertyName() {
    if (!this.transformPropertyName) {
      const el = document.createElement('div');
      this.transformPropertyName = ('transform' in el.style) ? 'transform' : '-webkit-transform';
    }
    return this.transformPropertyName;
  }

  setTransformPosition(position) {
    const propertyName = this.getTransformPropertyName();
    const transform = position === null ? null : `translateX(${position}px)`;
    this.native.style.setProperty(propertyName, transform);
  }

  handleTransitionend() {
    const { onTransitionend } = this.props;
    this.native.removeEventListener('transitionend', this.handleTransitionend);
    onTransitionend();
  }

  handleTouchstart(event) {
    const { onTouchstart } = this.props;
    const width = this.native.offsetWidth;
    onTouchstart(event, width);
  }

  render() {
    const {
      className,
      children,
    } = this.props;

    return (
      <nav
        className={classnames(`${ROOT}__drawer`, className)}
        ref={(native) => { this.native = native; }}
      >
        {children}
      </nav>
    );
  }
}
export default DrawerPane;
