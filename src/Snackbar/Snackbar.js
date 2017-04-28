import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Button from '../Button/Button';

const ROOT = 'mdc-snackbar';
const ACTIVE = `${ROOT}--active`;
const TEXT = `${ROOT}__text`;
const ACTION_WRAPPER = `${ROOT}__action-wrapper`;
const ACTION_BUTTON = `${ROOT}__action-button`;
const MULTILINE = `${ROOT}--multiline`;
const ACTION_ON_BOTTOM = `${ROOT}--action-on-bottom`;
const MESSAGE_TIMEOUT = 2750;

class Snackbar extends React.PureComponent {

  static propTypes = {
    action: PropTypes.string,
    actionOnBottom: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    multiline: PropTypes.bool,
    onClick: PropTypes.func,
    onTimeout: PropTypes.func,
    open: PropTypes.bool,
    timeout: PropTypes.number,
  };

  static defaultProps = {
    timeout: MESSAGE_TIMEOUT,
  };

  constructor(props) {
    super(props);
    this.handleTimeout = this.handleTimeout.bind(this);
  }

  componentDidMount() {
    const { open, timeout } = this.props;
    if (open) {
      setTimeout(this.handleTimeout, timeout);
    }
  }

  componentWillReceiveProps({ open: nextOpen }) {
    const { open, timeout } = this.props;
    if (nextOpen && !open) {
      setTimeout(this.handleTimeout, timeout);
    }
  }

  handleTimeout() {
    const { onTimeout } = this.props;
    if (onTimeout) {
      onTimeout();
    }
  }

  render() {
    const {
      action,
      actionOnBottom,
      children,
      className,
      multiline,
      onClick,
      onTimeout, // eslint-disable-line no-unused-vars
      open,
      timeout, // eslint-disable-line no-unused-vars
      ...otherProps
    } = this.props;
    return (
      <div
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden={!open}
        className={classnames(ROOT, {
          [ACTIVE]: open,
          [MULTILINE]: multiline,
          [ACTION_ON_BOTTOM]: multiline && actionOnBottom,
        }, className)}
        {...otherProps}
      >
        <div className={TEXT}>
          {children}
        </div>
        <div
          aria-hidden={!onClick || !action || !open}
          className={ACTION_WRAPPER}
        >
          <Button
            className={ACTION_BUTTON}
            onClick={(event) => { if (onClick) onClick(event); }}
          >
            {action}
          </Button>
        </div>
      </div>
    );
  }
}
export default Snackbar;
