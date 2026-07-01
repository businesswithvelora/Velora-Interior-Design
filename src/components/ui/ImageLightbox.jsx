/* FILE: src/components/ui/ImageLightbox.jsx */
import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export const ImageLightbox = ({ images = [], isOpen, currentIndex = 0, onClose }) => {
  const slides = images.map((img) => {
    if (typeof img === 'string') {
      return { src: img };
    }
    return { src: img.src, alt: img.alt };
  });

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      index={currentIndex}
      slides={slides}
      styles={{
        container: { backgroundColor: 'rgba(26, 26, 26, 0.95)' }
      }}
    />
  );
};

export default ImageLightbox;
