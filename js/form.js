import { validateForm } from './validation.js';

const uploadControlInput = document.querySelector('.img-upload__input ');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCloseOverlay = uploadOverlay.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlayImage = uploadOverlay.querySelector('.img-upload__preview img');
const uploadOverlayIconsFilter = uploadOverlay.querySelectorAll('.effects__preview');

const renderPreviewImage = () => {
  const fileImage = uploadControlInput.files[0];
  uploadOverlayImage.src = URL.createObjectURL(fileImage);
  uploadOverlayIconsFilter.forEach((icon) => {
    icon.style.backgroundImage = `url("${URL.createObjectURL(fileImage)}")`;
  });
};

const showModal = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderPreviewImage();
  document.addEventListener('keydown', onClickEsc);
  uploadOverlay.addEventListener('click', onClickOutside);
};

uploadControlInput.addEventListener('change', () => {
  showModal();
});

const closeModal = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset();
  document.removeEventListener('keydown', onClickEsc);
  uploadOverlay.removeEventListener('click', onClickOutside);
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateForm) {
    closeModal();
  }
});

uploadCloseOverlay.addEventListener('click', () => {
  closeModal();
});

function onClickEsc(evt) {
  const isInputFocus = evt.target.classList.contains('text__hashtags') || evt.target.classList.contains('text__description');
  if (isInputFocus) {
    return false;
  }
  if (evt.key === 'Escape') {
    closeModal();
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('img-upload__overlay')) {
    closeModal();
  }
}
