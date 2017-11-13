import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';


const ROOT = 'mdc-toolbar__row';

class ToolbarRow extends React.PureComponent {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onHeight: PropTypes.func,
  };

  render() {
    const { className, children, onHeight, ...otherProps } = this.props;
    return (
      <div
        className={classnames(ROOT, className)} {...otherProps}
        ref={(native) => {
          if (native && onHeight) {
            onHeight(native.offsetHeight);
          }
        }}
      >
        {children}
      </div>
    );
  }
}
export default ToolbarRow;

