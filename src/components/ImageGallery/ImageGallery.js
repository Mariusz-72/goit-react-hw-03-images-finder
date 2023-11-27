import React, { Component } from 'react';


class ImageGallery extends Component {
  render() {
    const { children } = this.props;

    return <div className="image-gallery">{children}</div>;
  }
}

export default ImageGallery;
