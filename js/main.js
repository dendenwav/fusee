'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

let chrono;
let button = document.querySelector('#firing-button');
let span = document.querySelector('span');
let rocket = document.querySelector('#rocket');
let width = window.innerWidth;
let height = window.innerHeight;
let ciel = document.querySelector('main');
let cancelButton;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function decollage() {
  button.removeEventListener('click', decollage);
  chrono = 10;
  rocket.src = 'images/rocket2.gif';
  button.classList.add('disabled');
  let launch = window.setInterval(chronoLaunch, 1000);
}

function chronoLaunch() {
  if (chrono !== 0) {
    span.innerText = chrono;
    --chrono;
    cancelButton.addEventListener('click', cancelDecollage);
  }
  else {
      span.innerText = chrono;
      rocket.src = 'images/rocket3.gif';
      rocket.classList.add('tookOff');
      cancelButton.classList.add('disabled');
      cancelButton.removeEventListener('click', cancelDecollage);
  }
}

function cancelDecollage() {
  window.clearInterval(launch);
}

function randomStar() {
  let tab = ['tiny', 'normal', 'big'];
  for (let i = 0 ; i<150; i++) {
    let randomSize = tab[Math.floor(Math.random() *3)];
    let randomWidth = Math.floor(Math.random() * width);
    let randomHeight = Math.floor(Math.random() * height);
    let star = document.createElement('div');
    star.classList.add('star');
    star.style.left = randomWidth + 'px';
    star.style.top = randomHeight + 'px';
    star.classList.add(randomSize);
    ciel.appendChild(star);
  }
}

function createCancelButton() {
  cancelButton = document.createElement('img');
  cancelButton.src = 'images/cancel-button.png';
  cancelButton.style.position = 'absolute';
  cancelButton.style.left = '300px';
  cancelButton.style.bottom = '100px';
  cancelButton.style.width = '75px';
  cancelButton.style.height = '75px';
  cancelButton.style.cursor = 'pointer';
  ciel.appendChild(cancelButton);
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

window.addEventListener('DOMContentLoaded', function() {
  createCancelButton();
  randomStar();
  button.addEventListener('click', decollage);
});






