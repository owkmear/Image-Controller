import React, { FC } from 'react';
import ImageGallery from './components/ImageGallery';
import Header from './components/Header';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const App: FC = () => {
  return (
    <div>
      <Header />
      <ImageGallery />
    </div>
  );
};

export default App;
