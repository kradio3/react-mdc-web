import PropTypes from 'prop-types';
import React from 'react';
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

  componentWillReceiveProps(next) {
    const { opacity } = this.props;
    if (opacity !== next.opacity && isSupportCssCustomProperties()) {
      this.native.style.setProperty(`--${ROOT}-opacity`, next.opacity);
    }
  }

  render() {
    const {
      animating,
      className,
      children,
      onClick,
      onTouchend,
      onTouchmove,
      open,
    } = this.props;

    return (
      <aside
        className={classnames(ROOT, {
          [`${ROOT}--open`]: open,
          [`${ROOT}--animating`]: animating,
        }, className)}
        ref={(native) => { this.native = native; }}
        onClick={onClick}
        onTouchEnd={onTouchend}
        onTouchMove={onTouchmove}
      >
        {children}
      </aside>
    );
  }
}
export default DrawerShade;
