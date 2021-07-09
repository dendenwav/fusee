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

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

window.addEventListener('DOMContentLoaded', function() {
  randomStar();
  button.addEventListener('click', decollage);
});






