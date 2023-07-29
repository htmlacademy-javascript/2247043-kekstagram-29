
const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAGS_VOLUME = 5;
const MAX_HASHTAGS_LENGTH = 20;
const HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;

const POST_DATA_URL = 'https://29.javascript.pages.academy/kekstagram';
const GET_DATA_URL = 'https://29.javascript.pages.academy/kekstagram/data';

const ALERT_SHOW_TIME = 5000;

const SHOW_ALERT_TEXT = 'Что-то пошло не так';

const RANDOM_PHOTOS_VALUE = 10;

const TIMEOUT_DELAY = 500;

const submitButtonText = {
  IDLE: 'Опубликовать',
  SUBMITING: 'Публикую...'
};

export {
  MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAGS_VOLUME,
  HASHTAG_SYMBOLS,
  MAX_HASHTAGS_LENGTH,
  SCALE_STEP,
  SCALE_MIN,
  SCALE_MAX,
  POST_DATA_URL,
  submitButtonText,
  GET_DATA_URL,
  ALERT_SHOW_TIME,
  SHOW_ALERT_TEXT,
  RANDOM_PHOTOS_VALUE,
  TIMEOUT_DELAY
};
