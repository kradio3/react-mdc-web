import React, { PropTypes, PureComponent } from 'react';

const AnimationController = WrappedComponent => class extends PureComponent {
  static propTypes = {
    open: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps({ open: nextOpen }) {
    const { open } = this.props;
    if (nextOpen !== open) {
      this.setState({ animation: true });
    }
  }

  finishAnimation() {
    this.setState({ animation: false });
  }

  render() {
    return (
      <WrappedComponent
        onAnimationFinish={() => { this.finishAnimation(); }}
        {...this.props}
        {...this.state}
      />
    );
  }
};
export default AnimationController;
