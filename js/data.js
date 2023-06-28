import { PHOTOS,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENTS,
  MAX_COMMENTS,
  COMMENTS,
  MIN_AVATAR,
  MAX_AVATAR,
  DESCRIPTIONS,
  MESSAGES,
  NAMES } from './constants.js';

// генерация случайного числа
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// генерация случайного числа с контролем (без) повторений
const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getId = createRandomIdFromRangeGenerator(1, PHOTOS);

const getPhotoId = createRandomIdFromRangeGenerator(1, PHOTOS);

const getCommentId = createRandomIdFromRangeGenerator(1, COMMENTS);

const getOneComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const getComments = (volume) => {
  const comments = [];

  for (let i = 1; i <= volume; i++) {
    comments.push(getOneComment());
  }
  return comments;
};

const getOnePhoto = () => ({
  id: getId(),
  url: `photos/${getPhotoId()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS))
})

const getPhotos = (count) => {
  const photos = [];

  for (let i = 1; i <= count; i++) {
    photos.push(getOnePhoto());
  }
  return photos;
};

export { getPhotos };
