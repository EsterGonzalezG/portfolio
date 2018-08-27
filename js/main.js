'use strict';
const button=document.querySelector('.nav__button');
const menu=document.querySelector('.nav__list');
button.addEventListener('click',()=>{
  menu.classList.toggle('visible');
  button.classList.toggle('img__menu');
});
const hoverTitle=document.querySelector('.title--color');
const goLink=document.querySelector('.go__link');

hoverTitle.addEventListener('mouseover',()=>{
  goLink.classList.add('go');
});

