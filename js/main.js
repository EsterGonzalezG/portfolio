'use strict';
const button=document.querySelector('.nav__button');
const menu=document.querySelector('.nav__list');
button.addEventListener('click',()=>{
  menu.classList.toggle('visible');
});


