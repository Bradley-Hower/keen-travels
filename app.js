'use strict';

// ** DOM Window ** //

let mainpage = document.getElementById('main-page');
let timer = document.getElementById('timer-page');
let counts = document.getElementById('counts-page');

// ** Rounds and Time Countdowns ** //

let global_array = [];
let location_odds_array = [];

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
    timer.innerHTML = "Scrounges reset!";
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

counts.innerHTML = searchrounds + ' Remaing';

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

// ** Scrounge menu ** //

function scroungemenu(){
  let scroungemenudiv = document.createElement('div');
  mainpage.appendChild(scroungemenudiv);
  scroungemenudiv.id = 'scroungemenudiv';
}


// ** Rezzy Generator ** //

let rezzygenerator = function () {
  let chance_randomnumber = randomarraynumber();
  let location_odds_load = location_odds_array[0];
  console.log(location_odds_array[0]);
  let top_range = location_odds_load * 1000;
  if (chance_randomnumber > 0 && chance_randomnumber < top_range){
    console.log('success!');
  } else {
    console.log('failure');
  }
};


//** Helper functions (Random Generator, image generator) */   For redesign with any variable number

function randomarraynumber(){
  let somenumber = Math.floor(Math.random() * 1000);
  return somenumber;
}

// ** Location success odds generator ** //
  // 35% - 1-100
  // 40% - 101-200
  // 45% - 201-300
  // 50% - 301-400
  // 55% - 401-500
  // 60% - 501-600
  // 65% - 601-700
  // 70% - 701-800
  // 75% - 801-900
  // 80% - 901-1000

function randompercentagenumber() {
  let pullrandomnumber = randomarraynumber();
  if (pullrandomnumber > 0 && pullrandomnumber < 101){
    let returnedpercentodd = 0.35;
    return returnedpercentodd;
  } else if (pullrandomnumber > 100 && pullrandomnumber < 201){
    let returnedpercentodd = 0.40;
    return returnedpercentodd;
  } else if (pullrandomnumber > 200 && pullrandomnumber < 301){
    let returnedpercentodd = 0.45;
    return returnedpercentodd;
  } else if (pullrandomnumber > 300 && pullrandomnumber < 401){
    let returnedpercentodd = 0.50;
    return returnedpercentodd;
  } else if (pullrandomnumber > 400 && pullrandomnumber < 501){
    let returnedpercentodd = 0.55;
    return returnedpercentodd;
  } else if (pullrandomnumber > 500 && pullrandomnumber < 601){
    let returnedpercentodd = 0.60;
    return returnedpercentodd;
  } else if (pullrandomnumber > 600 && pullrandomnumber < 701){
    let returnedpercentodd = 0.65;
    return returnedpercentodd;
  } else if (pullrandomnumber > 700 && pullrandomnumber < 801){
    let returnedpercentodd = 0.70;
    return returnedpercentodd;
  } else if (pullrandomnumber > 800 && pullrandomnumber < 901){
    let returnedpercentodd = 0.75;
    return returnedpercentodd;
  } else if (pullrandomnumber > 900 && pullrandomnumber < 1001){
    let returnedpercentodd = 0.80;
    return returnedpercentodd;
  } else {
    let returnedpercentodd = 0.50;
    return returnedpercentodd;
  }
}

let locationodds_cache = JSON.parse(localStorage.getItem('stored_location_odds_array'));


if (locationodds_cache){
  for(let i = 0; i < locationodds_cache.length; i++){
    location_odds_array.push(locationodds_cache[i]);
  }
} else {
  let beachodds = randompercentagenumber();
  location_odds_array.push(beachodds);
  let mountainodds = randompercentagenumber();
  location_odds_array.push(mountainodds);
  let quarryodds = randompercentagenumber();
  location_odds_array.push(quarryodds);
  let valleyodds = randompercentagenumber();
  location_odds_array.push(valleyodds);
  let locationodds_set = JSON.stringify(location_odds_array);
  localStorage.setItem('stored_location_odds_array', locationodds_set);
}



//** Constructor */

function RezzyCreature(imagename, image_ext = 'png'){
  this.name = imagename;
  this.image = `images/${imagename}.${image_ext}`;
  this.count = 0;
}

// ** Instantiation ** //

let rezzycache = JSON.parse(localStorage.getItem('stored_rezzy_array'));

if (rezzycache) {
  for(let i = 0; i < rezzycache.length; i++){
    let reconstructedrezziesowned = new RezzyCreature(rezzycache[i].name);
    reconstructedrezziesowned.votes = rezzycache[i].count;
    rezziesownedarray.push(reconstructedrezziesowned);
  }

} else {

  let rezzy1 = new RezzyCreature('colorpicker2000');
  let rezzy2 = new RezzyCreature('colorpicker2000');
  let rezzy3 = new RezzyCreature('colorpicker2000');
  let rezzy4 = new RezzyCreature('colorpicker2000');
  let rezzy5 = new RezzyCreature('colorpicker2000');
  let rezzy6 = new RezzyCreature('colorpicker2000');
  let rezzy7 = new RezzyCreature('colorpicker2000');
  let rezzy8 = new RezzyCreature('colorpicker2000');
  let rezzy9 = new RezzyCreature('colorpicker2000');
  let rezzy10 = new RezzyCreature('colorpicker2000');
  let rezzy11 = new RezzyCreature('colorpicker2000');
  let rezzy12 = new RezzyCreature('colorpicker2000');
  let rezzy13 = new RezzyCreature('colorpicker2000');
  let rezzy14 = new RezzyCreature('colorpicker2000');
  let rezzy15 = new RezzyCreature('colorpicker2000');
  let rezzy16 = new RezzyCreature('colorpicker2000');
  let rezzy17 = new RezzyCreature('colorpicker2000');
  let rezzy18 = new RezzyCreature('colorpicker2000');
  let rezzy19 = new RezzyCreature('colorpicker2000');
  let rezzy20 = new RezzyCreature('colorpicker2000');

  rezziesownedarray.push(rezzy1, rezzy2, rezzy3, rezzy4, rezzy5, rezzy6, rezzy7, rezzy8, rezzy9, rezzy10, rezzy11, rezzy12, rezzy13, rezzy14, rezzy15, rezzy16, rezzy17, rezzy18, rezzy19, rezzy20);

}
