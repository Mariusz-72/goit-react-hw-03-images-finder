import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  handleClick = () => {
    const { onClick, imageUrl } = this.props;
    onClick(imageUrl);
  };

  render() {
    const { imageUrl, alt } = this.props;

    return (
      <div className="image-gallery-item" onClick={this.handleClick}>
        <img src={imageUrl} alt={alt} className="image" />
      </div>
    );
  }
}

export default ImageGalleryItem;
