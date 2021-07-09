'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

let chrono;
let button = document.querySelector('#firing-button');
let span = document.querySelector('span');
let rocket = document.querySelector('#rocket');

button.addEventListener('click', decollage);
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function decollage() {
  button.removeEventListener('click', decollage);
  chrono = 10;
  rocket.src = 'images/rocket2.gif';
  button.classList.add('disabled');
  window.setInterval(chronoLaunch, 1000);
}

function chronoLaunch() {
  if (chrono !== 0) {
    span.innerText = chrono;
    --chrono;
  }
  else {
      span.innerText = chrono;
      rocket.src = 'images/rocket3.gif';
      rocket.classList.add('tookOff');
  }
}
/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
