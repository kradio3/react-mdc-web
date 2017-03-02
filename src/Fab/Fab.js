import React, { PropTypes } from 'react';
import classnames from 'classnames';


class Fab extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    mini: PropTypes.bool,
    plain: PropTypes.bool,
  };

  render() {
    const {
      className,
      children,
      mini,
      plain,
      ...otherProps
    } = this.props;
    const classes = classnames(
      'mdc-fab', {
        'mdc-fab--mini': mini,
        'mdc-fab--plain': plain,
      }, className);
    return (
      <button
        className={classes}
        ref={(native) => {
          if (native) {
            const icon = native.querySelector('i');
            icon.classList.add('mdc-fab__icon');
          }
        }}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
}

export default Fab;
