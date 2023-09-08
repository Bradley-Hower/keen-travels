'use strict';

// ** DOM Window ** //

let scroungemenu = document.getElementById('scroungemenudiv');
let timer = document.getElementById('timer-page');
let counts = document.getElementById('counts-page');
let scroungebuttondiv = document.getElementById('scroungebuttondiv-page');
let submenutitle = document.getElementById('submenutitle-page');
let rezzyloadinput = document.getElementById('rezzyloadinput-page');
let catalogsheet = document.getElementById('catalogsheet-page');

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

let newDate = addMinutes(currentdate, 1);

function counter_array_load(){
  let globalcache = JSON.parse(localStorage.getItem('stored_counter_array'));
  
  if (globalcache) {
    let storedtime = new Date(globalcache[0]).getTime();
    let distance = storedtime - currentdate;
    if (distance < -1000){
      counter_array[0] = addMinutes(currentdate, 1);
      counter_array[1] = 25;
      let globalcache1 = JSON.stringify(counter_array);
      localStorage.setItem('stored_counter_array', globalcache1);
    } else {
      counter_array[0] = globalcache[0];
      counter_array[1] = globalcache[1];
    }
  } else {
    let timestart = newDate;
    let rounds = 25;
    counter_array[0] = timestart;
    counter_array[1] = rounds;
    let globalcache2 = JSON.stringify(counter_array);
    localStorage.setItem('stored_counter_array', globalcache2);
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
    timer.innerHTML = 'Reset!';
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


// ** Profile ** //

function profile(rezzytoshow){
  let profileframe = document.createElement('div');
  profileframe.id = 'profileframe';
  profileframe.innerText = rezzytoshow.name;
  scroungemenu.appendChild(profileframe);

  let profilepic = document.createElement('img');
  profilepic.src = rezzytoshow.image;
  scroungemenu.appendChild(profilepic);

  let profilerank = document.createElement('div');
  profilerank.id = 'profilerank';
  profilerank.innerText = `Rank: ${rezzytoshow.rank}`;
  scroungemenu.appendChild(profilerank);

  let rezzycategory = document.createElement('div');
  rezzycategory.id = 'rezzycategory';
  rezzycategory.innerText = `${submenutitle.innerText}`;
  scroungemenu.appendChild(rezzycategory);

  let rezzytext = document.createElement('div');
  rezzytext.id = 'rezzytext';
  rezzytext.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  scroungemenu.appendChild(rezzytext);
}


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
  scroungemenu.innerHTML = '';
  rezzyloadinput.innerHTML = '';
  if (searchrounds > 0){
    let animationgif = document.createElement('img');
    animationgif.src = 'images/wait.gif';
    rezzyloadinput.appendChild(animationgif);
    setTimeout(rezzyadder, 1000);
  }
}

let rezzyfail = function (){
  scroungemenu.innerHTML = '';
  rezzyloadinput.innerHTML = '';
  if (searchrounds > 0){
    let animationgif = document.createElement('img');
    animationgif.src = 'images/fail.png';
    rezzyloadinput.appendChild(animationgif);
  }
};

// ** Rezzy odds table ** //

let rezzyindex = function (){
  let numberforrezzy = randomarraynumber();
  console.log(numberforrezzy);
  if (indexnumber() === 0){
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
  } else if (indexnumber() === 1){
    if (numberforrezzy > 0 && numberforrezzy < 6){
      let returnedrezzyindex = 0;
      return returnedrezzyindex;
    } else if (numberforrezzy > 5 && numberforrezzy < 81){
      let returnedrezzyindex = 1;
      return returnedrezzyindex;
    } else if (numberforrezzy > 80 && numberforrezzy < 181){
      let returnedrezzyindex = 2;
      return returnedrezzyindex;
    } else if (numberforrezzy > 180 && numberforrezzy < 301){
      let returnedrezzyindex = 3;
      return returnedrezzyindex;
    } else if (numberforrezzy > 300 && numberforrezzy < 1001){
      let returnedrezzyindex = 4;
      return returnedrezzyindex;
    }
  } else if (indexnumber() === 2){
    if (numberforrezzy > 0 && numberforrezzy < 3){
      let returnedrezzyindex = 0;
      return returnedrezzyindex;
    } else if (numberforrezzy > 2 && numberforrezzy < 56){
      let returnedrezzyindex = 1;
      return returnedrezzyindex;
    } else if (numberforrezzy > 55 && numberforrezzy < 151){
      let returnedrezzyindex = 2;
      return returnedrezzyindex;
    } else if (numberforrezzy > 150 && numberforrezzy < 491){
      let returnedrezzyindex = 3;
      return returnedrezzyindex;
    } else if (numberforrezzy > 490 && numberforrezzy < 1001){
      let returnedrezzyindex = 4;
      return returnedrezzyindex;
    }
  } else if (indexnumber() === 3){
    if (numberforrezzy > 0 && numberforrezzy < 2){
      let returnedrezzyindex = 0;
      return returnedrezzyindex;
    } else if (numberforrezzy > 1 && numberforrezzy < 21){
      let returnedrezzyindex = 1;
      return returnedrezzyindex;
    } else if (numberforrezzy > 20 && numberforrezzy < 71){
      let returnedrezzyindex = 2;
      return returnedrezzyindex;
    } else if (numberforrezzy > 70 && numberforrezzy < 351){
      let returnedrezzyindex = 3;
      return returnedrezzyindex;
    } else if (numberforrezzy > 320 && numberforrezzy < 1001){
      let returnedrezzyindex = 4;
      return returnedrezzyindex;
    }
  }
};

let rezzyadder = function(){
  let rezzyadded = rezzies_catalog[indexnumber()][rezzyindex()];
  profile(rezzyadded);
  rezzyadded.count++;
  let globalcache = JSON.stringify(rezzies_catalog);
  localStorage.setItem('stored_rezzy_array', globalcache);
  rezzyloadinput.innerHTML = '';
};

let rezzygenerator = function () {
  console.log(indexnumber());
  let chance_randomnumber = randomarraynumber();
  console.log(chance_randomnumber);
  let location_odds_load = location_odds_array[indexnumber()];
  console.log(location_odds_array[indexnumber()]);
  let top_range = location_odds_load * 1000;
  if (chance_randomnumber > 0 && chance_randomnumber < top_range){
    rezzyloadinput.innerHTML = '';
    console.log(chance_randomnumber);
    rezzyload();
  } else {
    rezzyloadinput.innerHTML = '';
    console.log('failure');
    setTimeout(rezzyfail, 1000);
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

// ** Catalog sheet page ** /

function catalogsheetrender(){
  let catalogtableR1 = document.createElement('p');
  catalogsheet.appendChild(catalogtableR1);
  catalogtableR1.innerText = 'Count Rank';

  for(let i = 0; i < rezzies_catalog.length; i++){
    for(let j = 0; j < rezzies_catalog[i].length; j++){
      let razzydatarow = document.createElement('tr');
      catalogsheet.appendChild(razzydatarow);

      let razzydataimg = document.createElement('td');
      razzydatarow.appendChild(razzydataimg);
      razzydataimg.innerHTML = `<img src="${rezzies_catalog[i][j].image}" title="${rezzies_catalog[i][j].name}"></img>`;

      let razzydataname = document.createElement('td');
      razzydatarow.appendChild(razzydataname);
      razzydataname.style.width = '250px';
      razzydataname.style.padding = '0 15px';
      razzydataname.innerText = rezzies_catalog[i][j].name;

      let razzydatacheckbox = document.createElement('td');
      razzydatarow.appendChild(razzydatacheckbox);
      if(rezzies_catalog[i][j].count > 0){
        razzydatacheckbox.innerHTML = '<img src="images/checkbox.png"></img>';
      } else {
        razzydatacheckbox.innerHTML = '<img src="images/blankcheckbox.png"></img>';
      }

      let razzydatacheckcount = document.createElement('td');
      razzydatarow.appendChild(razzydatacheckcount);
      razzydatacheckcount.innerText = rezzies_catalog[i][j].count;

      let razzydatacheckrank = document.createElement('td');
      razzydatarow.appendChild(razzydatacheckrank);
      razzydatacheckrank.innerText = rezzies_catalog[i][j].rank;
    }
  }
}

// ** profile click show
function profileclickhandler(event){
  //** Pull name from clicked item */
  let clickedimage = event.target.title;

  for(let i = 0; i < rezzies_catalog.length; i++){
    for(let j = 0; j < rezzies_catalog[i].length; j++){
      if (rezzies_catalog[i][j].name === clickedimage){
        profile(rezzies_catalog[i][j]);
      }
    } 
  }
}


catalogsheet.addEventListener('click', profileclickhandler);

//** Constructor */

function RezzyCreature(imagename, rank, image_ext = 'png'){
  this.name = imagename;
  this.image = `images/${imagename}.${image_ext}`;
  this.count = 0;
  this.rank = rank;
}

// ** Instantiation ** //

let rezzycache = JSON.parse(localStorage.getItem('stored_rezzy_array'));

if (rezzycache) {
  for(let i = 0; i < rezzycache.length; i++){
    let rezzy_array_layer1 = [];
    for(let j = 0; j < rezzycache[i].length; j++){
      let reconstructedrezziesowned = new RezzyCreature(rezzycache[i][j].name);
      reconstructedrezziesowned.count = rezzycache[i][j].count;
      reconstructedrezziesowned.rank = rezzycache[i][j].rank;
      rezzy_array_layer1.push(reconstructedrezziesowned);
    }
    rezzies_catalog.push(rezzy_array_layer1);
  }






} else {
  let rezzy0 = new RezzyCreature('Archaeopteryx', 4);
  let rezzy1 = new RezzyCreature('Meganeura', 11);
  let rezzy2 = new RezzyCreature('Cycad', 13);
  let rezzy3 = new RezzyCreature('Chocolate Cosmos', 14);
  let rezzy4 = new RezzyCreature('Dodo', 17);
  let rezzy5 = new RezzyCreature('Woolly_Mammoth', 3);
  let rezzy6 = new RezzyCreature('Homo_Floresiensis', 8);
  let rezzy7 = new RezzyCreature('Hallucigenia', 10);
  let rezzy8 = new RezzyCreature('Paraceratherium', 12);
  let rezzy9 = new RezzyCreature('Trilobite', 20);
  let rezzy10 = new RezzyCreature('Triceratops', 2);
  let rezzy11 = new RezzyCreature('Pterosaur Anurognathus', 7);
  let rezzy12 = new RezzyCreature('Megalonyx', 9);
  let rezzy13 = new RezzyCreature('Beibeilong', 16);
  let rezzy14 = new RezzyCreature('Ornithomimus', 18);
  let rezzy15 = new RezzyCreature('Tyrannosaurus_Rex', 1);
  let rezzy16 = new RezzyCreature('Diatryma', 5);
  let rezzy17 = new RezzyCreature('Sabertooth_Tiger', 6);
  let rezzy18 = new RezzyCreature('Anomalocaris', 15);
  let rezzy19 = new RezzyCreature('Shastasaurus', 19);


  let rezziesownedarraybeach = [];
  let rezziesownedarraymountain = [];
  let rezziesownedarrayquarry = [];
  let rezziesownedarrayvalley = [];

  rezziesownedarraybeach.push(rezzy0, rezzy1, rezzy2, rezzy3, rezzy4);
  rezziesownedarraymountain.push(rezzy5, rezzy6, rezzy7, rezzy8, rezzy9);
  rezziesownedarrayquarry.push(rezzy10, rezzy11, rezzy12, rezzy13, rezzy14);
  rezziesownedarrayvalley.push(rezzy15, rezzy16, rezzy17, rezzy18, rezzy19);

  rezzies_catalog.push(rezziesownedarraybeach,rezziesownedarraymountain, rezziesownedarrayquarry, rezziesownedarrayvalley);
}


catalogsheetrender();