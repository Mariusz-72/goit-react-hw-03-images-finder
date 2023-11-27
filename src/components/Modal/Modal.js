import React, { Component } from 'react';

class Modal extends Component {
  handleClose = () => {
    const { onClose } = this.props;
    onClose();
  };

  render() {
    const { imageUrl, alt } = this.props;

    return (
      <div className="modal-overlay" onClick={this.handleClose}>
        <div className="modal">
          <img src={imageUrl} alt={alt} className="modal-image" />
        </div>
      </div>
    );
  }
}

export default Modal;
