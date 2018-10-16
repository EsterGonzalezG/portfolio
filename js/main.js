'use strict';
const button = document.querySelector('.menu_on');
const menu = document.querySelector('.nav__list');
const navLink = document.querySelectorAll('.nav__link');

button.addEventListener('click', () => {
  menu.classList.toggle('visible');
  button.classList.toggle('visible_menu');
});


for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', cambiar);
}
function cambiar() {
  if (menu.classList.contains('visible')) {
    menu.classList.remove('visible');
    menu.classList.toggle('nav__link');
    button.classList.remove('visible_menu');
  }
}

const hoverBody = document.querySelector('body');
const goLink = document.querySelector('.go__link');

hoverBody.addEventListener('mouseover', () => {
  goLink.classList.add('go');
});

