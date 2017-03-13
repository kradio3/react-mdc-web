import React, { PropTypes } from 'react';
import classnames from 'classnames';

const ROOT = 'mdc-toolbar';
const FIXED = `${ROOT}--fixed`;
const ADJUST = `${ROOT}-fixed-adjust`;

class Toolbar extends React.PureComponent {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    fixed: PropTypes.bool,
  }

  componentDidMount() {
    if (this.props.fixed) {
      const contentElements = document.getElementsByClassName('mdc-content');
      Array.prototype.forEach.call(contentElements, (content) => {
        content.classList.add(ADJUST);
      });
    }
  }

  render() {
    const { className, fixed, children, ...otherProps } = this.props;
    return (
      <header
        className={classnames(ROOT, {
          [FIXED]: fixed,
        }, className)}
        {...otherProps}
      >
        {children}
      </header>
    );
  }
}
export default Toolbar;
