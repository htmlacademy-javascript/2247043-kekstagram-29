const modal = document.querySelector('.big-picture');
const closeModalButton = document.querySelector('.big-picture__cancel');
const modalImage = modal.querySelector('.big-picture__img img');
const modalCaption = modal.querySelector('.social__caption');
const modalLikes = modal.querySelector('.likes-count');
const modalComments = modal.querySelector('.social__comments');
const modalCommentTemplate = modal.querySelector('.social__comment');
const modalButtonLoader = modal.querySelector('.social__comments-loader');
const modalStatistic = modal.querySelector('.social__comment-count');
const outsideModal = document.querySelector('.overlay');

const commentsList = [];
let commentsTotal;

const showModal = () => {
  modal.classList.remove('hidden');
};

const renderComment = (comment) => {
  const commentTemplate = modalCommentTemplate.cloneNode(true);
  commentTemplate.querySelector('.social__picture').src = comment.avatar;
  commentTemplate.querySelector('.social__picture').alt = comment.name;
  commentTemplate.querySelector('.social__text').textContent = comment.message;
  return commentTemplate;
};

const renderCommentsStatistic = () => {
  modalStatistic.innerHTML = `${commentsTotal - commentsList.length} из <span class="comments-count">${commentsTotal}</span> комментариев`
};

const renderButtonLoader = () => {
  if (commentsList.length > 0) {
    modalButtonLoader.classList.remove('hidden');
  } else {
    modalButtonLoader.classList.add('hidden');
  }
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  commentsList.splice(0, 5).forEach((item) => {
    fragment.append(renderComment(item));
  });
  modalComments.append(fragment);
  renderButtonLoader();
  renderCommentsStatistic();
};

const renderModal = (data) => {
  modalImage.src = data.url;
  modalCaption.textContent = data.description;
  modalLikes.textContent = data.likes;
  renderComments();
};

modalButtonLoader.addEventListener('click', () => {
  renderComments();
});

const openModal = (photo) => {
  showModal();
  modalComments.innerHTML = '';
  commentsTotal = photo.comments.length;
  commentsList.length = 0;
  commentsList.push(...photo.comments.slice());
  renderModal(photo);
  document.addEventListener('keydown', onClickEsc);
  outsideModal.addEventListener('click', onClickOutside);
};

const closeModal = () => {
  modal.classList.add('hidden');
  document.removeEventListener('keydown', onClickEsc);
  outsideModal.removeEventListener('click', onClickOutside);
};

closeModalButton.addEventListener('click', () => {
  closeModal();
});


function onClickEsc(evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('overlay')) {
    closeModal();
  }
}

export { openModal };

