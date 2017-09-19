import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Tab from './Tab';


const ROOT = 'mdc-tab-bar';

class Tabbar extends React.PureComponent   {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render () {
    const {className, children, onTabAdded, ...otherProps} = this.props;
    const childs = React.Children.map(children, (child, index) => {
      if(child.type===Tab) {
        return React.cloneElement(child, {ref: (node)=>{
          if(onTabAdded) {
            onTabAdded(node);
          }
        }}
        );
      }

    });
    return (
      <nav
        className={classnames(ROOT, className)}
        {...otherProps}
      >
        {childs}
        <span className={`${ROOT}__indicator`} />
      </nav>
    );
  }
}

export default Tabbar;
