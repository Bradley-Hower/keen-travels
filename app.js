'use strict';

// ** DOM Window ** //

let scroungemenu = document.getElementById('scroungemenudiv');
let timer = document.getElementById('timer-page');
let counts = document.getElementById('counts-page');
let scroungebuttondiv = document.getElementById('scroungebuttondiv-page');
let submenutitle = document.getElementById('submenutitle-page');
let rezzyloadinput = document.getElementById('rezzyloadinput-page');

// ** Rounds and Time Countdowns ** //

let counter_array = [];
let location_odds_array = [];
let rezzies_catalog = [];


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

function counter_array_load(){
  let globalcache = JSON.parse(localStorage.getItem('stored_counter_array'));

  if (globalcache) {
    counter_array[0] = globalcache[0];
    counter_array[1] = globalcache[1];
  } else {
    let timestart = newDate;
    let rounds = 25;
    counter_array[0] = timestart;
    counter_array[1] = rounds;
    let globalcache = JSON.stringify(counter_array);
    localStorage.setItem('stored_counter_array', globalcache);
  }
}

counter_array_load();


let countDownArray = counter_array[0];
let searchrounds = counter_array[1];



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
    searchrounds = 25;
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
  scroungemenu.appendChild(homebutton);
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

function rezzyload(){
  if (searchrounds > 0){
    let animationgif = document.createElement('img');
    animationgif.src = 'images/wait.gif';
    rezzyloadinput.appendChild(animationgif);
    setTimeout(rezzyadder(), 5000);
    console.log('loaded');
  }
}



let rezzyindex = function (){
  rezzyloadinput.innerHTML = '';
  let numberforrezzy = randomarraynumber();
  if (numberforrezzy > 0 && numberforrezzy < 11){
    let returnedrezzyindex = 0;
    return returnedrezzyindex;
  } else if (numberforrezzy > 10 && numberforrezzy < 126){
    let returnedrezzyindex = 1;
    return returnedrezzyindex;
  } else if (numberforrezzy > 125 && numberforrezzy < 251){
    let returnedrezzyindex = 2;
    return returnedrezzyindex;
  } else if (numberforrezzy > 250 && numberforrezzy < 501){
    let returnedrezzyindex = 3;
    return returnedrezzyindex;
  } else if (numberforrezzy > 500 && numberforrezzy < 1001){
    let returnedrezzyindex = 4;
    return returnedrezzyindex;
  }
};

function rezzyadder(){
  rezzies_catalog[indexnumber()][rezzyindex()].count++;
  let globalcache = JSON.stringify(rezzies_catalog);
  localStorage.setItem('stored_rezzy_array', globalcache);
  // let animationgif = document.createElement('img');
  // animationgif.src = 'images/colorpicker2000.png';
  // rezzyloadinput.appendChild(animationgif);
}

let rezzygenerator = function () {
  console.log(indexnumber());
  let chance_randomnumber = randomarraynumber();
  console.log(chance_randomnumber);
  let location_odds_load = location_odds_array[indexnumber()];
  console.log(location_odds_array[indexnumber()]);
  let top_range = location_odds_load * 1000;
  if (chance_randomnumber > 0 && chance_randomnumber < top_range){
    console.log(chance_randomnumber);
    rezzyload();
  } else {
    console.log('failure');
  }
  if (searchrounds > 0){
    searchrounds--;
  }
  let rounds = searchrounds;
  counter_array[1] = rounds;
  let globalcache = JSON.stringify(counter_array);
  localStorage.setItem('stored_counter_array', globalcache);
  counts.innerHTML = searchrounds + ' Remaing';
};

// ** Scrounge Click Listener ** //


scroungebuttondiv.addEventListener('click', rezzygenerator);



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
    let rezzy_array_layer1 = [];
    console.log(i);
    for(let j = 0; j < rezzycache[i].length; j++){
      let reconstructedrezziesowned = new RezzyCreature(rezzycache[i][j].name);
      reconstructedrezziesowned.count = rezzycache[i][j].count;
      rezzy_array_layer1.push(reconstructedrezziesowned);
    }
    rezzies_catalog.push(rezzy_array_layer1);
  }






} else {

  let rezzy1 = new RezzyCreature('colorpicker20001');
  let rezzy2 = new RezzyCreature('colorpicker20002');
  let rezzy3 = new RezzyCreature('colorpicker20003');
  let rezzy4 = new RezzyCreature('colorpicker20004');
  let rezzy5 = new RezzyCreature('colorpicker20005');
  let rezzy6 = new RezzyCreature('colorpicker20006');
  let rezzy7 = new RezzyCreature('colorpicker20007');
  let rezzy8 = new RezzyCreature('colorpicker20008');
  let rezzy9 = new RezzyCreature('colorpicker20009');
  let rezzy10 = new RezzyCreature('colorpicker200010');
  let rezzy11 = new RezzyCreature('colorpicker200011');
  let rezzy12 = new RezzyCreature('colorpicker200012');
  let rezzy13 = new RezzyCreature('colorpicker200013');
  let rezzy14 = new RezzyCreature('colorpicker200014');
  let rezzy15 = new RezzyCreature('colorpicker200015');
  let rezzy16 = new RezzyCreature('colorpicker200016');
  let rezzy17 = new RezzyCreature('colorpicker200017');
  let rezzy18 = new RezzyCreature('colorpicker200018');
  let rezzy19 = new RezzyCreature('colorpicker200019');
  let rezzy0 = new RezzyCreature('colorpicker20000');

  let rezziesownedarraybeach = [];
  let rezziesownedarraymountain = [];
  let rezziesownedarrayquarry = [];
  let rezziesownedarrayvalley = [];

  rezziesownedarraybeach.push(rezzy1, rezzy2, rezzy3, rezzy4, rezzy5);
  rezziesownedarraymountain.push(rezzy6, rezzy7, rezzy8, rezzy9, rezzy10);
  rezziesownedarrayquarry.push(rezzy11, rezzy12, rezzy13, rezzy14, rezzy15);
  rezziesownedarrayvalley.push(rezzy16, rezzy17, rezzy18, rezzy19, rezzy0);

  rezzies_catalog.push(rezziesownedarraybeach,rezziesownedarraymountain, rezziesownedarrayquarry, rezziesownedarrayvalley);
}
