import { renderThumbnail } from './thumbnail.js';
import {
  RANDOM_PHOTOS_VALUE,
  TIMEOUT_DELAY
} from './constants.js';
import { debounce } from './utils.js';

const elementFilter = document.querySelector('.img-filters');

const showFilters = () => {
  elementFilter.classList.remove('img-filters--inactive');
};

const filterPhotos = (filter, photos) => {
  switch (filter) {
    case 'filter-default':
      return photos;

    case 'filter-random':
      return [...photos]
        .sort(() => Math.random() - 0.5)
        .slice(0, RANDOM_PHOTOS_VALUE);

    case 'filter-discussed':
      return [...photos]
        .sort((a, b) => b.comments.length - a.comments.length);
  }
};

const setActiveButton = (filterButton) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  filterButton.classList.add('img-filters__button--active');
};

const setFilters = (photos) => {
  showFilters();
  renderThumbnail(photos);
  elementFilter.addEventListener('click', debounce((evt) => {
    if (evt.target.classList.contains('img-filters__button')) {
      const id = evt.target.id;
      renderThumbnail(filterPhotos(id, photos));
      setActiveButton(evt.target);
    }
  }, TIMEOUT_DELAY));
};

export { setFilters };
