import React, { useState } from 'react';
import './ImageCarousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface ImageCarouselProps {
  images: string[];
  title: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="image-carousel">
      <img
        alt={ `${title} - Image ${currentIndex + 1}` }
        className="carousel-image"
        src={ images[currentIndex] }
      />
      {images.length > 1 && (
        <>
          <button
            aria-label="Previous image"
            className="carousel-control prev"
            onClick={goToPrevious}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button aria-label="Next image" className="carousel-control next" onClick={ goToNext }>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="carousel-dots">
            {images.map((_, idx) => (
              <span
                key={ idx }
                aria-label={ `Go to image ${idx + 1}` }
                className={ `dot ${currentIndex === idx ? 'active' : ''}` }
                onClick={ () => setCurrentIndex(idx) }></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
