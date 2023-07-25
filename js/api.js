import {
  POST_DATA_URL,
  GET_DATA_URL,
  SHOW_ALERT_TEXT
} from './constants.js';
import { showAlert } from './utils.js';

const getPhotos = () =>
  fetch(GET_DATA_URL)
    .then((response) => {
      if (!response.ok) {
        showAlert(SHOW_ALERT_TEXT);
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      showAlert(SHOW_ALERT_TEXT);
      throw new Error();
    });

const postPhoto = (body) =>
  fetch(POST_DATA_URL, {
    method: 'POST',
    body
  });


export {
  postPhoto,
  getPhotos
};
