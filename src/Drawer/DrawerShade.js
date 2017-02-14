import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { ROOT } from './constants';
import isSupportCssCustomProperties from '../utils/isSupportCssCustomProperties';


class DrawerShade extends React.PureComponent {

  static propTypes = {
    animating: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    open: PropTypes.bool,
    onClick: PropTypes.func,
    onTouchmove: PropTypes.func,
    onTouchend: PropTypes.func,
    opacity: PropTypes.number,
  };

  componentDidMount() {
    const { onClick, onTouchmove, onTouchend } = this.props;
    this.native.addEventListener('click', onClick);
    this.native.addEventListener('touchmove', onTouchmove);
    this.native.addEventListener('touchend', onTouchend);
  }

  componentWillReceiveProps(next) {
    const { opacity } = this.props;
    if (opacity !== next.opacity && isSupportCssCustomProperties()) {
      this.native.style.setProperty(`--${ROOT}-opacity`, next.opacity);
    }
  }

  componentWillUnmount() {
    const { onClick, onTouchmove, onTouchend } = this.props;
    this.removeEventListener('click', onClick);
    this.removeEventListener('touchmove', onTouchmove);
    this.removeEventListener('touchend', onTouchend);
  }

  render() {
    const {
      animating,
      className,
      children,
      open,
    } = this.props;

    return (
      <aside
        className={classnames(ROOT, {
          [`${ROOT}--open`]: open,
          [`${ROOT}--animating`]: animating,
        }, className)}
        ref={(native) => { this.native = native; }}
      >
        {children}
      </aside>
    );
  }
}
export default DrawerShade;
