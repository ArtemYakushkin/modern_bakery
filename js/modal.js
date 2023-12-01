// ------- Modal

const modal = document.querySelector('.backdrop');
const btnOpen = document.querySelector('.modal__btn-open');
const btnClose = document.querySelector('.modal__btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

btnOpen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);


