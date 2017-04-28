import PropTypes from 'prop-types';
import React, { PureComponent, Children, cloneElement } from 'react';
import classnames from 'classnames';

const ROOT = 'mdc-grid-list';
const TILES = `${ROOT}__tiles`;
const COMPACT = `${ROOT}--tile-gutter-1`;
const HEADER_CAPTION = `${ROOT}--header-caption`;
const RATIO = `${ROOT}--tile-aspect`;
const TWOLINE = `${ROOT}--twoline-caption`;
const ICON_ALIGN_START = `${ROOT}--with-icon-align-start`;
const ICON_ALIGN_END = `${ROOT}--with-icon-align-end`;


class GridList extends PureComponent {

  static propTypes = {
    captionIconAlign: PropTypes.oneOf(['start', 'end']),
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    headerCaption: PropTypes.bool,
    ratio: PropTypes.oneOf(['1x1', '16x9', '2x3', '3x2', '4x3', '3x4']),
    twoLineCaption: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.forceUpdate();
  }

  render() {
    const {
      captionIconAlign,
      children,
      className,
      compact,
      headerCaption,
      ratio,
      twoLineCaption,
      ...otherProps
    } = this.props;

    const childs = Children.map(children, (child, index) => {
      if (index === 0) {
        return cloneElement(child, {
          onWidthChange: (width) => { this.setState({ itemWidth: width }); },
        });
      }
      return child;
    });

    const { gridWidth, itemWidth } = this.state;
    const tilesWidth = itemWidth * Math.floor(gridWidth / itemWidth);

    return (
      <div
        className={classnames(ROOT, {
          [COMPACT]: compact,
          [HEADER_CAPTION]: headerCaption,
          [TWOLINE]: twoLineCaption,
          [`${RATIO}-${ratio}`]: ratio,
          [ICON_ALIGN_START]: captionIconAlign === 'start',
          [ICON_ALIGN_END]: captionIconAlign === 'end',
        }, className)}
        ref={(native) => { this.setState({ gridWidth: native && native.offsetWidth }); }}
        {...otherProps}
      >
        <ul
          className={TILES}
          style={{ width: `${tilesWidth}px` }}
        >
          {childs}
        </ul>
      </div>
    );
  }
}

export default GridList;

