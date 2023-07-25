import { onClickFormEsc } from './form.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const closePopup = () => {
  document.querySelector('.popup').remove();
  deleteListener();
  document.addEventListener('keydown', onClickFormEsc);
};

const showSuccessPopup = () => {
  const successPopupElement = successTemplate.cloneNode(true);
  document.body.append(successPopupElement);
  successPopupElement.classList.add('popup');
  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', closePopup);
  hangListener();
};

const showErrorPopup = () => {
  const errorPopupElement = errorTemplate.cloneNode(true);
  document.body.append(errorPopupElement);
  errorPopupElement.classList.add('popup');
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', closePopup);
  hangListener();
};

function onClickEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup();
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
