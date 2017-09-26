import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

import { MDCSlider } from '@material/slider/dist/mdc.slider';

const DISCRETE = 'mdc-slider--discrete';
const SHOW_MARKERS = 'mdc-slider--display-markers';

export default class Slider extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.number.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    // Per MDC documentation providing step doesn't imply discrete, so an explicit property
    discrete: PropTypes.bool,
    showMarkers: PropTypes.bool,
    onInput: PropTypes.func,
    onChange: PropTypes.func,
  };

  componentDidMount() {
    this.slider = new MDCSlider(this.node);
    this.setup(this.props);

    this.slider.listen('MDCSlider:change', () => this.handleMDCSliderChange());
    this.slider.listen('MDCSlider:input', () => this.handleMDCSliderInput());
  }

  componentWillReceiveProps(newProps) {
    this.setup(newProps);
  }

  componentWillUnmount() {
    this.slider.unlisten('MDCSlider:change', () => this.handleMDCSliderChange());
    this.slider.unlisten('MDCSlider:input', () => this.handleMDCSliderInput());
    this.slider.destroy();
  }

  setup(props) {
    this.slider.disabled = props.disabled;
    if (props.min) {
      this.slider.min = props.min;
    }
    if (props.max) {
      this.slider.max = props.max;
    }
    if (props.step) {
      this.slider.step = props.step;
    }
    this.slider.value = props.value;
  }

  handleMDCSliderInput() {
    if (this.props.onInput) {
      this.props.onInput(this.slider.value);
    }
  }

  handleMDCSliderChange() {
    if (this.props.onChange) {
      this.props.onChange(this.slider.value);
    }
  }

  render() {
    const { className, value, min, max, step, discrete, showMarkers = false,
            ...otherProps } = this.props;

    return (
      <div
        ref={(node) => { this.node = node; }}
        className={classnames('mdc-slider', {
          [SHOW_MARKERS]: showMarkers,
          [DISCRETE]: discrete,
        }, className)}
        {...otherProps}
      >
        <div className="mdc-slider__track-container">
          <div className="mdc-slider__track" />
          { discrete && showMarkers &&
          <div className="mdc-slider__track-marker-container" />
          }
        </div>
        <div className="mdc-slider__thumb-container">
          { discrete &&
          <div className="mdc-slider__pin">
            <span className="mdc-slider__pin-value-marker" />
          </div>
          }
          <svg className="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875" />
          </svg>
          <div className="mdc-slider__focus-ring" />
        </div>
      </div>
    );
  }
}
