import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import {
  ANIMATING,
  ROOT,
  OPEN,
  SURFACE,
  BACKDROP,
  SCROLL_LOCK,
} from './constants';

class Dialog extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = { animating: false };
  }

  componentWillReceiveProps({ open: nextOpen }) {
    const { open } = this.props;
    const onOpen = !open && nextOpen;
    const onClose = open && !nextOpen;
    if (onOpen) {
      this.setState({ animating: true });
      document.body.classList.add(SCROLL_LOCK);
      document.addEventListener('keydown', (e) => { this.handleKeyDown(e); });
    } else if (onClose) {
      this.setState({ animating: true });
      document.body.classList.remove(SCROLL_LOCK);
      document.removeEventListener('keydown', (e) => { this.handleKeyDown(e); });
    }
  }

  handleKeyDown(event) {
    const { onClose } = this.props;
    const isEscape = event.key && (event.key === 'Escape' || event.keyCode === 27);
    if (onClose && isEscape) {
      onClose();
    }
  }

  render() {
    const { className, children, onClose, open, ...otherProps } = this.props;
    const ariaHiddenProp = open ? {} : { 'aria-hidden': true };

    return (
      <aside
        className={classnames(ROOT, {
          [ANIMATING]: this.state.animating,
          [OPEN]: open,
        }, className)}
        onClick={(e) => { if (onClose) onClose(e); }}
        onTransitionEnd={() => { this.setState({ animating: false }); }}
        {...ariaHiddenProp}
      >
        <div
          className={SURFACE}
          onClick={(e) => { e.stopPropagation(); }}
          {...otherProps}
        >
          {children}
        </div>
        <div className={BACKDROP} />
      </aside>
    );
  }
}

export default Dialog;
