import React, { FC } from 'react';
import { photos } from '../api/photos';
import { Photo } from '../model';

import LightGallery from 'lightgallery/react';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const ImageGallery: FC = () => {
  return (
    <main className="gallery">
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} mode="lg-fade">
        {photos.map((photo: Photo) => (
          <a key={photo.src} className="gallery__item" href={`images/${photo.src}`} data-lg-size={photo.size}>
            <img className="gallery__image img-responsive" alt={photo.author} src={`thumbs/${photo.src}`} />
          </a>
        ))}
      </LightGallery>
    </main>
  );
};

export default ImageGallery;
