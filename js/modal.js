// ------- Modal

const modal = document.querySelector('.backdrop');
const btnOpen = document.querySelector('.modal__btn-open');
const btnOpen2 = document.querySelector('.modal__btn-open-2');
const btnClose = document.querySelector('.modal__btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

btnOpen.addEventListener('click', toggleModal);
btnOpen2.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);


