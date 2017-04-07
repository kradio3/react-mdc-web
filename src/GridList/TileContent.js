import { PropTypes, createElement } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  component: PropTypes.string,
};

const defaultProps = {
  component: 'img',
};

const TileContent = ({ className, component, ...otherProps }) => {
  const classes = classnames('mdc-grid-tile__primary-content', className);
  return createElement(component, {
    className: classes,
    ...otherProps,
  });
};

TileContent.propTypes = propTypes;
TileContent.defaultProps = defaultProps;
export default TileContent;

