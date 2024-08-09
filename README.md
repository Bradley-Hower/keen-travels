# Rezzies - Collectible Digital Assets

By Bradley Hower

Rezzies is a collectible digital asset game targeted towards children. With the digital assets, they are limited to "go exploring" once per day to find fossils, or "Rezzies". 

Rezzies creates a platform for children to become interested in science and the natural world. It allows them to learn about past and current plants and animals, along with some important scientific facts. Additionally, it's fun!

Please see requirements.md for more details on features. 

## User Stories

### Rezzy Information

>I want to know more about this Rezzie I have.

Each Rezzy profile must have:

+ Picture.
+ Rezzy category.
+ Written out information about Rezzy. Lorem Ipsum to start.


### Rezzy Catalog with Rankings

>I want to know which Rezzies I have and how rare they are.

When clicking the Catalog button:

+ A full pullout list of all the Rezzies the user has.
+ Rankings of scarcity next to each Rezzy listed.
+ Ability to click each Rezzy and see profile.


### Countdowns

>I want to know how many times I can go search for Rezzies so that I can go again.

At the top of the page:

+ Countdowns for time until next search. For testing purposes, three minutes.
+ Countdown of number of search remaining.


### Locations

>I want to know where the different Rezzies are so I can find the awesome ones.

+ Have four clickable map locations which take to independent pages. Sea, rock quarries, beaches, and mountains.
+ Each location has independently set probabilities.


### Buy searches

>How do I improve my searching options so that I can find more?

At the top, near the countdowns:

+ Button for user to "pay $4" adds five more searches,
+ Changes all scrounge probabilities for that day to 100%.

## File Structure
```
..
├── index.html
├── css
|   ├── reset.css
|   └── style.css
└── js
    ├── app.js
    └── catalog.js
```

## Wireframess

![Rezzy](https://github.com/Bradley-Hower/rezzies/assets/139923955/c64c00e6-f698-4195-a15f-5d3a2e6a708b)

![Rezzy 1](https://github.com/Bradley-Hower/rezzies/assets/139923955/e46b33eb-326b-47c8-9ee8-aa906e64268c)

![Rezzy 2](https://github.com/Bradley-Hower/rezzies/assets/139923955/065ddea9-3329-40a0-82f5-8de375d5a3d5)

![Rezzy 3](https://github.com/Bradley-Hower/rezzies/assets/139923955/dbcb9a59-cfea-4e46-a03f-7ae1b94e89fa)

![Rezzy 4](https://github.com/Bradley-Hower/rezzies/assets/139923955/de0b7863-3fc4-4d98-be1a-0f7a11deab50)

![Rezzy 5](https://github.com/Bradley-Hower/rezzies/assets/139923955/11e1ac2b-3bf4-4fea-b5e5-914e568533a1)

![Rezzy 6](https://github.com/Bradley-Hower/rezzies/assets/139923955/271298e5-fab4-40dc-818c-1fab18e85633)

![Rezzy 7](https://github.com/Bradley-Hower/rezzies/assets/139923955/2dbe41ac-5807-423e-920d-2934c101949f)

## Domain Map

![Domain Map](https://github.com/Bradley-Hower/rezzies/assets/139923955/32d94494-c565-40e0-840d-bf90edb77ec3)

## Versions

0.1.0 - Set basic site framework. Completed HTML file and created the following files: reset.css, style.css, app.js, catalog.js, license, readme.md, requirements.md, .gitignore, .eslintrc.json.

0.2.0 - Scrounge. Randomized Rezzy draw.

0.2.0 - Set counters, time and draws remaining.

0.3.0 - Profiles for Rezzies.

0.4.0 - Catalog created.

0.5.0 - Profile images.

1.0.0 - Fully working.

1.1
- Z-index of catalog now higher than top buttons
- Zone labels for catalog
- Top buttons - better alignment
- Memory that start was clicked
- Only able to see owned cards
- Correct clock add minutes issue

---

Images Sources:

http://almanaquedabiblia.com.br/estrela-de-belem/

https://commons.wikimedia.org/wiki/File:Cala_Coloritze_vom_Land.JPG

https://upload.wikimedia.org/wikipedia/commons/f/f2/Valle_della_Luna%2C_Aggius%2C_Province_of_Olbia-Tempio%2C_Sardinia%2C_Italy_-_panoramio.jpg

https://www.flickr.com/photos/40351463@N00/18250553643

https://unsplash.com/photos/akSushxGwLI

https://unsplash.com/photos/RVExmY6fLW4

https://commons.wikimedia.org/wiki/File:Comet_and_%27Churymoon%27_ESA19661632.gif

https://commons.wikimedia.org/wiki/File:Tyrannosaurus_Rex_colored.png

https://freepngimg.com/png/52949-triceratop-picture-free-download-png-hq

https://commons.wikimedia.org/wiki/File:Woolly_mammoth.jpg

https://en.wikipedia.org/wiki/File:Archaeopteryx_2B.JPG

http://www.entierradedinosaurios.com/2012/11/un-nuevo-estudio-concluye-que-el-ave.html

https://www.unabrevehistoria.com/2007/10/el-dodo-evolucin-hacia-la-extincin.html

https://dinosaurpictures.org/Anurognathus-pictures

https://arc-team-open-research.blogspot.com/2015/08/homo-floresiensis.html

https://daily.wired.it/foto/2013/03/29/animali-estinzione-vita-785296578.html

https://en.wikipedia.org/wiki/Megalonyx

https://www.flickr.com/photos/cdevers/8247829737

https://klexikon.zum.de/wiki/Erdaltertum

https://www.goodfreephotos.com/fossils/trilobite-zlichovaspis-rugosa.jpg.php

https://www.earthwonders.co/nature/a-prehistoric-plant-set-to-reproduce-in-uk-after-60-million-years-possibly-due-to-climate-change/

https://www.gildshire.com/extinct-plants-wished-still-around-rare-ones-still-save/

https://www.flickr.com/photos/ngawangchodron/50007672538/

https://www.deviantart.com/kaek/art/Hallucigenia-544541678

https://www.wired.it/scienza/lab/2017/05/10/nuove-specie-dinosauro/

https://en.wikipedia.org/wiki/Wikipedia:WikiProject_Dinosaurs/Image_review/Archive_2016

https://thewiki.kr/w/%EC%95%84%EB%85%B8%EB%A7%90%EB%A1%9C%EC%B9%B4%EB%A6%AC%EC%8A%A4

http://en.wikipedia.org/wiki/File:Shonisaurus_popularisDB.jpg
