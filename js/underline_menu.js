// 'use strict';


// const target = document.querySelector('.target');
// const links = document.querySelectorAll('.nav__list .nav__link');
// const enlace= document.querySelectorAll('.nav__items');
// const colors = ['white'];

// function mouseenterFunc() {
//   if (!this.parentNode.classList.contains('active')) {
//     for (let i = 0; i < links.length; i++) {
//       if (links[i].parentNode.classList.contains('active')) {
//         links[i].parentNode.classList.remove('active');
//       }
//       links[i].style.opacity = '0.25';
//     }

//     this.parentNode.classList.add('active');
//     this.style.opacity = '1';

//     const width = this.getBoundingClientRect().width;
//     const height = this.getBoundingClientRect().height;
//     const left = this.getBoundingClientRect().left + window.pageXOffset;
//     const top = this.getBoundingClientRect().top + window.pageYOffset;
//     const color = colors;

//     target.style.width = `${width}px`;
//     target.style.height = `${height+7}px`;
//     target.style.left = `${left}px`;
//     target.style.top = `${top}px`;
//     target.style.borderColor = color;
//     target.style.zIndex ='1';
//     target.style.transform = 'none';
//   }
// }

// for (let i = 0; i < links.length; i++) {
// //   links[i].addEventListener('click', function () { 
// //   setTimeout(function () {
// //     links[i].addEventListener('mouseenter', mouseenterFunc);
// // }, 1500); 
// // }
//     //links[i].addEventListener('mousedown', hola);
//     enlace[i].addEventListener('click',hola);
//     links[i].addEventListener('mouseenter', mouseenterFunc);

 



// }
// function hola(e){
//     e.preventDefault();
//     // location.href='aboutme.html';
//     alert('er');

// }
// function resizeFunc() {
//   const active = document.querySelector('.nav__list .nav__items.active');

//   if (active) {
//     const left = active.getBoundingClientRect().left + window.pageXOffset;
//     const top = active.getBoundingClientRect().top + window.pageYOffset;

//     target.style.left = `${left}px`;
//     target.style.top = `${top}px`;
//   }
// }

// window.addEventListener('resize', resizeFunc);