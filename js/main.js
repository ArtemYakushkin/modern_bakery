const modal = document.querySelector('.backdrop');
const btnOpen = document.querySelector('.modal__btn-open');
const btnClose = document.querySelector('.modal__btn-close');

const closeModal = () => modal.classList.add('is-hidden');
const openModal = () => modal.classList.remove('is-hidden');

btnClose.addEventListener('click', closeModal);
btnOpen.addEventListener('click', openModal);