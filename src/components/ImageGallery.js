import React from 'react'
import { photos } from '../api/photos'

import LightGallery from 'lightgallery/react'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

function ImageGallery() {
  return (
    <div className="gallery">
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} mode="lg-fade">
        {photos.map((x) => (
          <a className="gallery__item" href={x.src}>
            <img className="gallery__image" alt={x.author} src={x.src} />
          </a>
        ))}
      </LightGallery>
    </div>
  )
}

export default ImageGallery
