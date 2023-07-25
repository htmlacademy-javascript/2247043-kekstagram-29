import { getPhotos } from './api.js';
import { renderThumbnail } from './thumbnail.js';
import './form.js';

getPhotos()
  .then((photos) => {
    renderThumbnail(photos);
  });

// почистить ненужные константы в constants

