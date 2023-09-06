'use strict';

// ** DOM Window ** //

let mainpage = document.getElementById('main-page');


// // ** Welcome div ** //
// let welcomediv = document.createElement('div');
// mainpage.appendChild(welcomediv);
// welcomediv.id = 'welcomediv';
// welcomediv.innerText = 'Rezzies!';

// let startbutton = document.createElement('div');
// welcomediv.appendChild(startbutton);
// startbutton.id = 'start';
// startbutton.innerText = 'Start';

// // ** Welcome div remove listen handler ** //
// let welcomedivremoval = function() {
//   mainpage.innerHTML = '';
// };

// startbutton.addEventListener('click', welcomedivremoval);


// ** Location Menus ** //

let submenus = function() {
  let beach = document.createElement('div');
  mainpage.appendChild(beach);
  beach.id = 'beach';
  beach.innerText = 'Beach';

  let mountain = document.createElement('div');
  mainpage.appendChild(mountain);
  mountain.id = 'mountain';
  mountain.innerText = 'Mountain';

  let quarry = document.createElement('div');
  mainpage.appendChild(quarry);
  quarry.id = 'quarry';
  quarry.innerText = 'Quarry';

  let valley = document.createElement('div');
  mainpage.appendChild(valley);
  valley.id = 'valley';
  valley.innerText = 'Valley';
};

submenus ();

// ** Location Listener ** //



// ** Location Menus ** //

let homebutton;

let beachmenu = function() {
  let beachmenudiv = document.createElement('div');
  mainpage.appendChild(beachmenudiv);
  beachmenudiv.id = 'beachmenudiv';

  let homebutton = document.createElement('div');
  beachmenudiv.appendChild(homebutton);
  homebutton.id = 'homebutton';
};

let submenuclear = function() {
  mainpage.innerHTML = '';
};


beach.addEventListener('click', beachmenu);
mountain.addEventListener('click', mountainmenu);
quarry.addEventListener('click', quarrymenu);
valley.addEventListener('click', valleymenu);

homebutton.addEventListener('click', submenuclear);
