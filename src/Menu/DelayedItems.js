import React, { PropTypes, Children, cloneElement } from 'react';
import { TRANSITION_DURATION_MS, TRANSITION_SCALE_ADJUSTMENT_Y } from './constants';

const DelayedItems = WrappedComponent => class extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
    applyDelays: PropTypes.bool,
    reverse: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    const { children } = this.props;
    this.state = { children };
  }

  componentWillReceiveProps({ applyDelays: nextApplyDelays }) {
    const { applyDelays, children } = this.props;
    if (applyDelays !== nextApplyDelays) {
      this.setState({
        children: nextApplyDelays ? this.applyTransitionDelays() : children,
      });
    }
  }

  applyTransitionDelays() {
    const { children, reverse } = this.props;
    const numItems = Children.count(children);
    const transitionDuration = TRANSITION_DURATION_MS / 1000;
    const start = TRANSITION_SCALE_ADJUSTMENT_Y;
    const delayedChildren = Children.map(children, (child, index) => {
      let itemDelayFraction;
      if (reverse) {
        itemDelayFraction = (numItems - index) / numItems;
      } else {
        itemDelayFraction = index / numItems;
      }
      const delay = (start + (itemDelayFraction * (1 - start))) * transitionDuration;
      return cloneElement(child, { delay });
    });
    return delayedChildren;
  }

  render() {
    const {
      applyDelays, // eslint-disable-line no-unused-vars
      children, // eslint-disable-line no-unused-vars
      reverse, // eslint-disable-line no-unused-vars
      ...otherProps
    } = this.props;
    return (
      <WrappedComponent
        {...this.state}
        {...otherProps}
      />
    );
  }
};
export default DelayedItems;
