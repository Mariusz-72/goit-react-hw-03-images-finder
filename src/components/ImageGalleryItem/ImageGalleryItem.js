import React from 'react';

const ImageGalleryItem = ({ imageUrl, alt, onClick }) => {
  return (
    <li className="gallery-item" onClick={onClick}>
      <img
        src={imageUrl}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </li>
  );
};

export default ImageGalleryItem;
