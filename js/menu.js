// --------- Mobile menu

const menu = document.querySelector('.mobile-menu');
const btnOpenMenu = document.querySelector('.mobile__btn-open');
const btnCloseMenu = document.querySelector('.mobile__btn-close');

const toggleMenu = () => menu.classList.toggle('is-open');

btnOpenMenu.addEventListener('click', toggleMenu);
btnCloseMenu.addEventListener('click', toggleMenu);