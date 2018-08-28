'use strict';
const button=document.querySelector('.nav__button');
const menu=document.querySelector('.nav__list');
button.addEventListener('click',()=>{
  menu.classList.toggle('visible');
  button.classList.toggle('img__menu');
});
const hoverBody=document.querySelector('body');
const goLink=document.querySelector('.go__link');

hoverBody.addEventListener('mouseover',()=>{
  goLink.classList.add('go');
});

