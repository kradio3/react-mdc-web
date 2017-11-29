import PropTypes from 'prop-types';
import React, { Children } from 'react';
/* eslint-disable import/no-unresolved, import/extensions */
import { clamp } from './util';
/* eslint-enable import/no-unresolved, import/extensions */
import AnimationController from '../Animation/AnimationController';
import DocumentClickHandler from './DocumentClickHandler';
import MenuList from './MenuList';
import MenuSlider from './MenuSlider';
import { calculateScale, calculateInnerScales } from './scaleCalculator';
import { TRANSITION_DURATION_MS } from './constants';
import MenuChilds from './childChecker';

const getAccurateTime = () => window.performance.now();

class Menu extends React.PureComponent {
  static propTypes = {
    animation: PropTypes.bool,
    bottom: PropTypes.bool,
    children: PropTypes.arrayOf(MenuChilds),
    onAnimationFinish: PropTypes.func,
    open: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = { openSlider: props.open };
  }

  componentWillReceiveProps({ open, animation: nextAnimation }) {
    const { animation } = this.props;

    if (nextAnimation && nextAnimation !== animation) {
      this.animationRequestId = requestAnimationFrame(() => {
        this.startTime = getAccurateTime();
        this.setState({ applyDelays: open });
        this.animationRequestId = requestAnimationFrame(() => {
          this.setState({ openSlider: open });
          this.handleTick();
        });
      });
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationRequestId);
  }

  handleScale() {
    const { animation, open, children } = this.props;
    if (!animation) {
      const scale = open ? 1 : 0;
      return { scaleX: scale, scaleY: scale };
    }
    const { animationProgress } = this.state;
    const numItems = Children.count(children);
    const scales = calculateScale(animationProgress, open, numItems);
    return scales;
  }

  handleTick() {
    const time = getAccurateTime();
    const animationProgress = clamp((time - this.startTime) / TRANSITION_DURATION_MS);
    if (animationProgress < 1) {
      this.setState({ animationProgress });
      this.animationRequestId = requestAnimationFrame(() => this.handleTick());
    } else {
      this.animationRequestId = 0;
      this.setState({ animationProgress: 1 });
      this.props.onAnimationFinish();
    }
  }

  render() {
    const {
      animation,
      bottom,
      children, // eslint-disable-line no-unused-vars
      onAnimationFinish, // eslint-disable-line no-unused-vars
      open, // eslint-disable-line no-unused-vars
      ...otherProps
    } = this.props;
    const {
      openSlider,
      applyDelays,
    } = this.state;
    const scales = this.handleScale();
    const innerScales = calculateInnerScales(scales);
    return (
      <MenuSlider
        animation={animation}
        open={openSlider}
        bottom={bottom}
        {...scales}
        {...otherProps}
      >
        <MenuList
          applyDelays={applyDelays}
          reverse={bottom}
          {...innerScales}
        >
          {children}
        </MenuList>
      </MenuSlider>
    );
  }
}
export default DocumentClickHandler(AnimationController(Menu));
