// Modal.js
import React, { useEffect } from 'react';

const Modal = ({ imageUrl, alt, onClose }) => {
  
  const handleEscape = event => {
    if (event.keyCode === 27) {
      onClose();
    }
  };

  
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <img src={imageUrl} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
