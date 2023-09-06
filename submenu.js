'use strict';

// ** DOM Window ** //

let mainpage = document.getElementById('beach-page');
let timer = document.getElementById('timer-page');
let counts = document.getElementById('counts-page');
let scroungebuttondiv = document.getElementById('scroungebuttondiv-page');
let submenutitle = document.getElementById('submenutitle-page');

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

// ** Rounds ** //

counts.innerHTML = searchrounds + ' Remaing';


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




// ** Rezzy Generator ** //

function indexnumber() {
  if(submenutitle.innerText === 'Beach'){
    return 0;
  } else if (submenutitle.innerText === 'Mountain'){
    return 1;
  } else if (submenutitle.innerText === 'Quarry'){
    return 2;
  } else if (submenutitle.innerText === 'Valley'){
    return 3;
  }
}

let rezzygenerator = function () {
  console.log(indexnumber());
  let chance_randomnumber = randomarraynumber();
  let location_odds_load = location_odds_array[indexnumber()];
  console.log(location_odds_array[indexnumber()]);
  let top_range = location_odds_load * 1000;
  if (chance_randomnumber > 0 && chance_randomnumber < top_range){
    console.log(chance_randomnumber);
    console.log('success!');
  } else {
    console.log('failure');
  }
  
};

// ** Scrounge Click Listener ** //


scroungebuttondiv.addEventListener('click', rezzygenerator);



//** Helper functions (Random Generator, image generator) */   For redesign with any variable number

function randomarraynumber(){
  let somenumber = Math.floor(Math.random() * 1000);
  return somenumber;
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
