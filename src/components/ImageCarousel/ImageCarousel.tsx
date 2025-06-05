import React, { useState } from 'react';
import './ImageCarousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface ImageCarouselProps {
  images: string[];
  title: string; // For accessibility (alt text)
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images || images.length === 0) {
    return null; // Or a placeholder if no images
  }

  return (
    <div className="image-carousel">
      <img
        src={images[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="carousel-image"
      />
      {images.length > 1 && (
        <>
          <button className="carousel-control prev" onClick={goToPrevious} aria-label="Previous image">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carousel-control next" onClick={goToNext} aria-label="Next image">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="carousel-dots">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to image ${idx + 1}`}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;