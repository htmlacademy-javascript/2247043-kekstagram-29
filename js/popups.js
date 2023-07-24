import { onClickFormEsc } from './form.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const closePopupSuccess = () => {
  document.querySelector('.success').remove();
  deleteListener();
};

const closePopupError = () => {
  document.querySelector('.error').remove();
  deleteListener();
  document.addEventListener('keydown', onClickFormEsc);
};

const showSuccessPopup = () => {
  const successPopupElement = successTemplate.cloneNode(true);
  document.body.append(successPopupElement);
  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', closePopupSuccess);
  hangListener();
};

const showErrorPopup = () => {
  const errorPopupElement = errorTemplate.cloneNode(true);
  document.body.append(errorPopupElement);
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', closePopupError);
  hangListener();
};

function onClickEsc(evt) {
  if (evt.key === 'Escape') {
    if (document.querySelector('.error')) {
      closePopupError();
    }
    if (document.querySelector('.success')) {
      closePopupSuccess();
    }
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('error')) {
    closePopupError();

  }
  if (evt.target.classList.contains('success')) {
    closePopupSuccess();
  }
}

function hangListener() {
  document.addEventListener('keydown', onClickEsc);
  document.addEventListener('click', onClickOutside);
}

function deleteListener() {
  document.removeEventListener('keydown', onClickEsc);
  document.removeEventListener('click', onClickOutside);
}

export {
  showSuccessPopup,
  showErrorPopup
};

