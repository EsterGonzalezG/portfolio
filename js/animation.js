'use strict';
const message = 'FRONT END DEVELOPER';
let msgCount = 0;
let timer1;
const messageLabel = document.querySelector('.title--color');
function textFunc() {
  messageLabel.innerHTML = message.substring(0, msgCount);
  if (msgCount === message.length ){
    // Stop Timer
    clearInterval(timer1);
    // Start blinking animation!
  } else {
    msgCount++;
  }
}
timer1 = setInterval('textFunc()', 120); // Every 150 milliseconds

