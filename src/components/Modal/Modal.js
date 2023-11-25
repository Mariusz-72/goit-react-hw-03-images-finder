// Modal.js
import React, { useEffect, useCallback } from 'react';

const Modal = ({ imageUrl, alt, onClose }) => {
  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <img src={imageUrl} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
