'use strict';

// ** DOM Window ** //

let mainpage = document.getElementById('main-page');
let timer = document.getElementById('timer-page');
let counts = document.getElementById('counts-page');

// ** Rounds and Time Countdowns ** //

let global_array = [];

let currentdate = new Date();
// let datetime = currentdate.getDate() + '/'
//                 + (currentdate.getMonth()+1)  + '/'
//                 + currentdate.getFullYear() + ' @ '
//                 + currentdate.getHours() + ':'
//                 + currentdate.getMinutes() + ':'
//                 + currentdate.getSeconds();

function addMinutes(date, minutes) {
  date.setMinutes(date.getMinutes() + minutes);
  return date;
}

let newDate = addMinutes(currentdate, 5);


let globalcache = JSON.parse(localStorage.getItem('stored_global_array'));

if (globalcache) {
  global_array[0] = globalcache[0];
  global_array[1] = globalcache[1];
} else {
  let timestart = newDate;
  let rounds = 25;
  global_array[0] = timestart;
  global_array[1] = rounds;
  let globalcache = JSON.stringify(global_array);
  localStorage.setItem('stored_global_array', globalcache);
}


let countDownArray = global_array[0];
let searchrounds = global_array[1];


let rezziesownedarray = [];

// ** Timer ** //
// Set the date we're counting down to
let countDownDate = new Date(countDownArray).getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  timer.innerHTML = days + 'd ' + hours + 'h '
  + minutes + 'm ' + seconds + 's ';

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    timer.innerHTML = "Scrounge!";
  }
}, 1000);

// ** Welcome div ** //
let welcomediv = document.createElement('div');
mainpage.appendChild(welcomediv);
welcomediv.id = 'welcomediv';
welcomediv.innerText = 'Rezzies!';

let startbutton = document.createElement('div');
welcomediv.appendChild(startbutton);
startbutton.id = 'start';
startbutton.innerText = 'Start';

// ** Rounds ** //

counts.innerHTML = searchrounds + "";

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

submenus();

// ** Location Listener ** //



// ** Location Menus ** //

let beachmenu = function() {
  let beachmenudiv = document.createElement('div');
  mainpage.appendChild(beachmenudiv);
  beachmenudiv.id = 'beachmenudiv';
  homebuttonrun();
};

let mountainmenu = function() {
  let mountainmenudiv = document.createElement('div');
  mainpage.appendChild(mountainmenudiv);
  mountainmenudiv.id = 'mountainmenudiv';
  homebuttonrun();
};

let quarrymenu = function() {
  let quarrymenudiv = document.createElement('div');
  mainpage.appendChild(quarrymenudiv);
  quarrymenudiv.id = 'quarrymenudiv';
  homebuttonrun();
};

let valleymenu = function() {
  let valleymenudiv = document.createElement('div');
  mainpage.appendChild(valleymenudiv);
  valleymenudiv.id = 'valleymenudiv';
  homebuttonrun();
};



// ** home link ** //

let homelinkrun = function() {
  let homelink = document.createElement('a');
  homebutton.appendChild(homelink);
  homelink.href = 'index.html';
  homelink.innerText = 'home';
};


let homebuttonrun = function() {
  let homebutton = document.createElement('div');
  mainpage.appendChild(homebutton);
  homebutton.id = 'homebutton';
  homelinkrun();
};


// ** Location Click Listener ** //

beach.addEventListener('click', beachmenu);
mountain.addEventListener('click', mountainmenu);
quarry.addEventListener('click', quarrymenu);
valley.addEventListener('click', valleymenu);






// ** Instantiation ** //

let rezzycache = JSON.parse(localStorage.getItem('stored_rezzy_array'));

if (rezzycache) {
  for(let i = 0; i < rezzycache.length; i++){
    let reconstructedrezziesowned = new RezzyCreature(rezzycache[i].name);
    reconstructedrezziesowned.votes = rezzycache[i].count;
    rezziesownedarray.push(reconstructedrezziesowned);
  }

} else {

  let product1 = new RezzyCreature('bag');
  let product2 = new RezzyCreature('banana');
  let product3 = new RezzyCreature('bathroom');
  let product4 = new RezzyCreature('boots');
  let product5 = new RezzyCreature('breakfast');
  let product6 = new RezzyCreature('bubblegum');
  let product7 = new RezzyCreature('chair');
  let product8 = new RezzyCreature('cthulhu');
  let product9 = new RezzyCreature('dog-duck');
  let product10 = new RezzyCreature('dragon');
  let product11 = new RezzyCreature('pen');
  let product12 = new RezzyCreature('pet-sweep');
  let product13 = new RezzyCreature('scissors');
  let product14 = new RezzyCreature('shark');
  let product15 = new RezzyCreature('sweep', 'png');
  let product16 = new RezzyCreature('tauntaun');
  let product17 = new RezzyCreature('unicorn');
  let product18 = new RezzyCreature('water-can');
  let product19 = new RezzyCreature('wine-glass');
  let product20 = new RezzyCreature('wine-glass');

  rezziesownedarray.push(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20);

}
