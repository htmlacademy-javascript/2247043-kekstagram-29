import {
  SCALE_STEP,
  SCALE_MIN,
  SCALE_MAX } from './constants.js';


const scaleMinus = document.querySelector('.scale__control--smaller');
const scalePlus = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');

let scale;

const renderScale = () => {
  scaleControl.value = scale;
  previewImage.style = `transform: scale(${scale * 0.01})`;
  if (scale === SCALE_MIN) {
    scaleMinus.disabled = true;
  }else {
    scaleMinus.disabled = false;
  }
  if (scale === SCALE_MAX) {
    scalePlus.disabled = true;
  }else {
    scalePlus.disabled = false;
  }
};

const onMinusClick = () => {
  scale = scale - SCALE_STEP >= SCALE_MIN ? scale - SCALE_STEP : SCALE_MIN;
  renderScale();
};

const onPlusClick = () => {
  scale = scale + SCALE_STEP <= SCALE_MAX ? scale + SCALE_STEP : SCALE_MAX;
  renderScale();
};

scaleMinus.addEventListener('click', onMinusClick);
scalePlus.addEventListener('click', onPlusClick);

const resetScale = () => {
  scale = SCALE_MAX;
  renderScale();
};

export { resetScale };
