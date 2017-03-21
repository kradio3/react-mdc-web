import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { FOOTER, FOOTER_BUTTON, FOOTER_BUTTON_CANCEL, FOOTER_BUTTON_ACCEPT } from './constants';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const DialogFooter = ({ className, children }) => {
  const last = children.length - 1;
  const actions = React.Children.map(children, (action, index) => {
    const isLastAction = last === index;
    const actionClasses = action.props.className;
    const classes = classnames(actionClasses, 'mdc-button', FOOTER_BUTTON, {
      [FOOTER_BUTTON_CANCEL]: !isLastAction,
      [FOOTER_BUTTON_ACCEPT]: isLastAction,
    });
    return React.cloneElement(action, { key: index, className: classes });
  });

  return (
    <footer
      className={classnames(FOOTER, className)}
    >
      {actions}
    </footer>
  );
};
DialogFooter.propTypes = propTypes;
export default DialogFooter;
