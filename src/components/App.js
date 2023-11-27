import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      images: [],
      page: 1,
      isLoading: false,
      selectedImage: null,
    };
  }

  fetchData = async () => {
    const { searchQuery, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const response = await fetch(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=39862890-65ac2b6f59b7905db114a6f69&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  handleSearchSubmit = query => {
    this.setState({ searchQuery: query, page: 1, images: [] }, this.fetchData);
  };

  loadMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }), this.fetchData);
  };

  openModal = imageUrl => {
    this.setState({ selectedImage: imageUrl });
    document.addEventListener('keydown', this.handleKeyDown);
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
    document.removeEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  };

  render() {
    const { images, isLoading, selectedImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              imageUrl={image.webformatURL}
              alt={image.tags}
              onClick={() => this.openModal(image.largeImageURL)}
            />
          ))}
        </ImageGallery>
        {isLoading && <Loader />}
        <Button
          onClick={this.loadMoreImages}
          isVisible={images.length > 0 && !isLoading}
        />
        {selectedImage && (
          <Modal
            imageUrl={selectedImage}
            alt="Selected Image"
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default App;
