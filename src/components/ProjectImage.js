import { toBeRequired } from '@testing-library/jest-dom/matchers';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  .image-gallery {
    .image-gallery-image {
      border-radius: 20px;
      // box-shadow: 0px 10px 20px rgba(0, 0, 0, 1);
    }

    .image-gallery-thumbnails .image-gallery-thumbnail {
      cursor: pointer; // Changes cursor to pointer when hovering over thumbnails

      &:hover {
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5); 
      }
    }
  }
`;

const ProjectImage = ({ images }) => {
  // Convert image array to the format expected by react-image-gallery
  const imageGalleryItems = images.map((image) => ({
    original: image,
    thumbnail: image
  }));

  return (
    <GalleryContainer>
      <ImageGallery
        items={imageGalleryItems}
        autoPlay={false}
        slideInterval={3000}
        showPlayButton={false} // Hides the play button
        showFullscreenButton={toBeRequired} 
        showThumbnails={true}
        slideDuration={450}
        renderLeftNav={() => null} // Hide left navigation arrow
        renderRightNav={() => null} // Hide right navigation arrow
      />
    </GalleryContainer>
  );
};

export default ProjectImage;
