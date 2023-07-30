import { validateForm } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { postPhoto } from './api.js';
import {
  showErrorPopup,
  showSuccessPopup
} from './popups.js';
import { submitButtonText } from './constants.js';

const uploadControlInput = document.querySelector('.img-upload__input ');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCloseOverlay = uploadOverlay.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlayImage = uploadOverlay.querySelector('.img-upload__preview img');
const uploadOverlayIconsFilter = uploadOverlay.querySelectorAll('.effects__preview');
const submitButton = document.querySelector('.img-upload__submit');


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
  document.addEventListener('keydown', onClickFormEsc);
  uploadOverlay.addEventListener('click', onClickOutside);
  resetScale();
  resetEffects();
};

uploadControlInput.addEventListener('change', () => {
  showModal();
});

const closeModal = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset();
  document.removeEventListener('keydown', onClickFormEsc);
  uploadOverlay.removeEventListener('click', onClickOutside);
};


const disabledSubmitButton = (isDisabled = true) => {
  submitButton.disabled = isDisabled;
  submitButton.textContent = isDisabled ? submitButtonText.SUBMITING : submitButtonText.IDLE;
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();


  if (validateForm) {
    disabledSubmitButton();
    postPhoto(new FormData(evt.target))
      .then((response) => {
        if (response.ok) {
          showSuccessPopup();
          closeModal();
        } else {
          showErrorPopup();
          document.removeEventListener('keydown', onClickFormEsc);
        }
      })
      .catch(() => {
        showErrorPopup();
        document.removeEventListener('keydown', onClickFormEsc);
      })
      .finally(() => {
        disabledSubmitButton(false);
      });
  }
});

uploadCloseOverlay.addEventListener('click', () => {
  closeModal();
});

function onClickFormEsc(evt) {
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

export { onClickFormEsc };

