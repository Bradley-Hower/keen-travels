'use strict';

// ** DOM Window ** //

let mainpage = document.getElementById('main-page');


// ** Welcome div ** //
let welcomediv = document.createElement('div');
mainpage.appendChild(welcomediv);
welcomediv.id = 'welcomediv';
welcomediv.innerText = 'Rezzies!';

let startbutton = document.createElement('div');
welcomediv.appendChild(startbutton);
startbutton.id = 'start';
startbutton.innerText = 'Start';


// // ** Welcome div remove listen handler ** //
let welcomeclear = function() {
  welcomediv.style.visibility = 'hidden';
  // localStorage.setItem('welcome', "welcomediv.style.visibility = 'hidden';");
};

startbutton.addEventListener('click', welcomeclear);


// ** Location Menus ** //

let submenus = function() {
  let beach = document.createElement('div');
  mainpage.appendChild(beach);
  beach.id = 'beach';
  let beachlink = document.createElement('a');
  beach.appendChild(beachlink);
  beachlink.href = 'beach.html';
  beachlink.innerText = 'Beach';

  let mountain = document.createElement('div');
  mainpage.appendChild(mountain);
  mountain.id = 'mountain';
  let mountainlink = document.createElement('a');
  mountain.appendChild(mountainlink);
  mountainlink.href = 'mountain.html';
  mountainlink.innerText = 'Mountain';

  let quarry = document.createElement('div');
  mainpage.appendChild(quarry);
  quarry.id = 'quarry';
  let quarrylink = document.createElement('a');
  quarry.appendChild(quarrylink);
  quarrylink.href = 'quarry.html';
  quarrylink.innerText = 'Quarry';

  let valley = document.createElement('div');
  mainpage.appendChild(valley);
  valley.id = 'valley';
  let valleylink = document.createElement('a');
  valley.appendChild(valleylink);
  valleylink.href = 'valley.html';
  valleylink.innerText = 'Valley';
};

submenus();
