import PropTypes from 'prop-types';
import React from 'react';

const DocumentClickHandler = WrappedComponent => class extends React.PureComponent {

  static propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.notifyClose = this.notifyClose.bind(this);
  }

  componentDidMount() {
    if (this.props.open) {
      document.addEventListener('click', this.notifyClose);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.notifyClose);
  }

  componentWillReceiveProps({ open: nextOpen }) {
    const { open } = this.props;
    if (open && !nextOpen) {
      document.removeEventListener('click', this.notifyClose);
    } else if (!open && nextOpen) {
      document.addEventListener('click', this.notifyClose);
    }
  }

  notifyClose() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    const {
      onClose, // eslint-disable-line no-unused-vars
      ...otherProps
    } = this.props;
    return (
      <WrappedComponent
        {...otherProps}
      />
    );
  }
};
export default DocumentClickHandler;
