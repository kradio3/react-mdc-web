import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import TabbarScrollerIndicator from './TabbarScrollerIndicator';

const ROOT = 'mdc-tab-bar-scroller';
const FRAME =`${ROOT}__scroll-frame`;

class TabbarScroller extends React.PureComponent {

  static propTypes = { 
    children: PropTypes.node, 
    className: PropTypes.string, 
  };

  constructor(props) {
    super(props);
    this.state = { translate: 0};
    this.tabs = [];
  }

  scrollForward() { 
    const {right: frameRight, left: frameLeft} = this.frame.getBoundingClientRect();
    let tabLeftPosition = 0;
    for(const tab of this.tabs) {
      const {right: tabRight, left: tabLeft} = ReactDOM.findDOMNode(tab).getBoundingClientRect();
      if(tabRight > frameRight) {
        tabLeftPosition = tabLeft;
        break;
      }
    }
    const scrollTo = tabLeftPosition - frameLeft;

    this.setState({translate: this.state.translate-scrollTo});
  }

  scrollBack() {
    const {translate} = this.state;
    let newTranslate = translate +300;
    if(newTranslate <= 0) {
      this.setState({translate: this.state.translate + 500});
    }
  }

  render () {
    const { className, children, ...otherProps } = this.props;
    const tabbar = React.cloneElement(React.Children.only(children), {
      className: 'mdc-tab-bar-scroller__scroll-frame__tabs',
      translate: this.state.translate,
      onTabAdded: (tab)=>{
        this.tabs.push(tab);

        //console.log('dom', ReactDOM.findDOMNode(tab).getBoundingClientRect());
        //console.log('scroller add', tab.getBoundingClientRect());
      }
    });
    return (
      <div
        className={classnames(ROOT, className)}
        {...otherProps}
      >
        <TabbarScrollerIndicator
          onClick = {() => this.scrollBack()}
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
