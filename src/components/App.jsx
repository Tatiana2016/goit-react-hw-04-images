import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import SearchBar from './SearchBar';
import Button from './Button';
import Loader from './Loader';

const API_KEY = '35692569-c6b1047d301c17a4ef696f2c7';
const BASE_URL = 'https://pixabay.com/api/';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery === '') return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        const data = await response.json();

        setImages((prevImages) => [...prevImages, ...data.hits]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, page]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading ? (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} size={50} />
      ) : (
        images.length > 0 && <Button onClick={handleLoadMore} disabled={isLoading} />
      )}
      <Modal isOpen={selectedImage !== null} onClose={handleCloseModal} image={selectedImage} />
    </div>
  );
};

export default App;
