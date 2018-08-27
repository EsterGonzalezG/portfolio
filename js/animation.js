'use strict';
const message = 'FRONT END DEVELOPER';
let msgCount = 0;
let timer1;
const messageLabel = document.querySelector('.title--color');
function textFunc() {
  messageLabel.innerHTML = '<a class="enlaces" href="#contenedor1">'+message.substring(0, msgCount)+'</a>';
  if (msgCount === message.length) {
    // Stop Timer
    clearInterval(timer1);
    // Start blinking animation!
  } else {
    msgCount++;
  }
}
timer1 = setInterval('textFunc()', 150); // Every 150 milliseconds

