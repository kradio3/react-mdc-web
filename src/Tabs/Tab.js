import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';


const ROOT = 'mdc-tab';
const ACTIVE = `${ROOT}--active`;

class Tab extends React.PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    component: PropTypes.string,
  };

  static defaultProps = {
    component: 'a',
  };

  render() {
    const {
      active,
      className,
      component,
      ...otherProps
    } = this.props;
    const classes = classnames(ROOT, { [ACTIVE]: active }, className);

    return React.createElement(component, {
      className: classes,
      ...otherProps,
    });
  };
}
export default Tab;
