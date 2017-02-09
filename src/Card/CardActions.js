import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const CardActions = ({ className, children }) => {
  const actions = React.Children.map(children, (action, index) => {
    const actionClasses = action.props.className;
    const classes = classnames(actionClasses, 'mdc-card__action');
    return React.cloneElement(action, { key: index, className: classes });
  });

  return (
    <section
      className={classnames('mdc-card__actions', className)}
    >
      {actions}
    </section>
  );
};
CardActions.propTypes = propTypes;
export default CardActions;
