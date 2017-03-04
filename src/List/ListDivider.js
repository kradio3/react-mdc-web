import { PropTypes, createElement } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  isListItem: PropTypes.bool,
  inset: PropTypes.bool,
};

const defaultProps = {
  isListItem: false,
};

const ListDivider = ({ inset, isListItem, ...otherProps }) => {
  const tag = isListItem ? 'li' : 'hr';
  const className = classnames('mdc-list-divider', {
    'mdc-list-divider--inset': inset,
  }, otherProps.className);
  const props = isListItem ? { className, role: 'separator' } : { className };
  return createElement(tag, props);
};
ListDivider.propTypes = propTypes;
ListDivider.defaultProps = defaultProps;
export default ListDivider;
