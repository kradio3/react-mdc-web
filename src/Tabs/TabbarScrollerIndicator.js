import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Icon from '../Icon/Icon';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  forward: PropTypes.bool,
};

const ROOT = 'mdc-tab-bar-scroller__indicator';
const FORWARD = `${ROOT}--forward`;
const BACK = `${ROOT}--back`;
const ENABLED = `${ROOT}--enabled`;
const INNER = `${ROOT}__inner`;

const ICON_NEXT = 'navigate_next';
const ICON_BEFORE = 'navigate_before';

const TabbarScrollerIndicator = ({className, children, forward, ...otherProps }) => {
  const iconName = forward ? ICON_NEXT : ICON_BEFORE;
  return(
    <div
      className={classnames(ROOT, INNER, ENABLED, {
        [FORWARD] : forward,
        [BACK] : !forward,
      },
        className)}
        {...otherProps}
      >
        <Icon name={iconName}/>
      </div>
  );
}

TabbarScrollerIndicator.propTypes = propTypes;
export default TabbarScrollerIndicator;
