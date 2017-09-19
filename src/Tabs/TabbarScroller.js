import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import TabbarScrollerIndicator from './TabbarScrollerIndicator';

const ROOT = 'mdc-tab-bar-scroller';
const FRAME =`${ROOT}__scroll-frame`;

class TabbarScroller extends React.PureComponent {

  static propTypes = { 
    children: PropTypes.node, 
    className: PropTypes.string, 
  };

  scrollForward() { 
    console.log('scroll forward', this.frame.getBoundingClientRect());
    requestAnimationFrame(() => {
      this.frame.style.setProperty('transform', 'translateX(-100px)');

    });
  }

  scrollBack() {
    console.log('scroll back');
  }

  render () {
    const { className, children, ...otherProps } = this.props;
    const tabbar = React.cloneElement(React.Children.only(children), {
      onTabAdded: (tab)=>{
        console.log('scroller add', tab);
      }
    });
    return (
      <div
        className={classnames(ROOT, className)}
        {...otherProps}
      >
        <TabbarScrollerIndicator

        />
        <div 
          className={FRAME} 
          ref = {(div) => {this.frame = div;}}
        >
          {tabbar}
        </div>
        <TabbarScrollerIndicator 
          forward 
          onClick = {() => this.scrollForward()}
        />
      </div>
    );

  }
}
export default TabbarScroller;
