import {
  MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAGS_VOLUME,
  HASHTAG_SYMBOLS,
  MAX_HASHTAGS_LENGTH
} from './constants.js';
import { checkLength } from './utils.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFormHashtags = document.querySelector('.text__hashtags');
const uploadFormDescription = document.querySelector('.text__description');

const pristine = new Pristine(
  uploadForm,
  {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'p',
    errorTextClass: 'form__error',
  },
  true
);

const getTagsArray = (value) => value.replace(/ +/g, ' ').trim().toLowerCase().split(' ');

const validateDescription = (value) => checkLength(value, MAX_DESCRIPTION_LENGTH);

pristine.addValidator(
  uploadFormDescription,
  validateDescription,
  `Длина комментария не может составлять больше ${MAX_DESCRIPTION_LENGTH} символов`
);

const validateHashtagsVolume = (value) => getTagsArray(value).length <= MAX_HASHTAGS_VOLUME;

pristine.addValidator(
  uploadFormHashtags,
  validateHashtagsVolume,
  `Нельзя указать больше ${MAX_HASHTAGS_VOLUME} хэш-тегов`,
  1,
  true
);

const validateHashtsg = (value) => {
  const tags = getTagsArray(value);
  return !value.length ? true : !tags.some((tag) => !HASHTAG_SYMBOLS.test(tag));
};

pristine.addValidator(
  uploadFormHashtags,
  validateHashtsg,
  `хэш-тег начинается с символа # (решётка),
  строка после решётки должна состоять из букв и чисел и не может содержать пробелы,
  спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.,
  хеш-тег не может состоять только из одной решётки,
  максимальная длина одного хэш-тега ${MAX_HASHTAGS_LENGTH} символов, включая решётку`,
  1,
  true
);

const validateUniqueHashtag = (value) => {
  const tags = getTagsArray(value);
  const uniqueTags = [... new Set(tags)];
  return tags.length === uniqueTags.length;
};

pristine.addValidator(
  uploadFormHashtags,
  validateUniqueHashtag,
  'один и тот же хэш-тег не может быть использован дважды',
  1,
  true
);

const validateForm = () => pristine.validate();


export { validateForm };
