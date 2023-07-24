const PHOTOS = 25;

const MIN_LIKES = 0;
const MAX_LIKES = 999;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 10;

const COMMENTS = 5000;

const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAGS_VOLUME = 5;
const MAX_HASHTAGS_LENGTH = 20;
const HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;

const POST_DATA_URL = 'https://28.javascript.pages.academy/kekstagram';

const submitButtonText = {
  IDLE: 'Опубликовать',
  SUBMITING: 'Публикую...'
};

const DESCRIPTIONS = [
  'утро',
  'созвон',
  'котик',
  'пёсик',
  'снег'
];

const MESSAGES = [
  'В целом всё неплохо. Но не всё.',
  'В целом всё плохо.'
];

const NAMES = [
  'Виктория',
  'Иван',
  'Вадим',
  'Елена',
  'Кирилл'
];

export {
  PHOTOS,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENTS,
  MAX_COMMENTS,
  COMMENTS,
  MIN_AVATAR,
  MAX_AVATAR,
  DESCRIPTIONS,
  MESSAGES,
  NAMES,
  MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAGS_VOLUME,
  HASHTAG_SYMBOLS,
  MAX_HASHTAGS_LENGTH,
  SCALE_STEP,
  SCALE_MIN,
  SCALE_MAX,
  POST_DATA_URL,
  submitButtonText
};
