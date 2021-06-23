var pictures = [
    "images/sodasprings.jpg",
    "images/springfield.jpg",
    "images/fishhaven.jpg",
    "images/franklin.jpg",
    "images/greenville.jpg",
    "images/placerton.jpg",
    "images/preston.jpg"
];
var citiesToUse = [6, 0, 2];
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    for (let i = 0; i < citiesToUse.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('p');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement('img');
        h2.textContent = towns[citiesToUse[i]].name;
        
        // image.setAttribute('src', prophets[i].imageurl);
        // image.setAttribute('alt', prophets[i].name + " " + prophets[i].lastname + " - " + prophets[i].order);
        image.setAttribute('src', pictures[citiesToUse[i]]);
        image.setAttribute('alt', towns[citiesToUse[i]].name + " picture");
        
        motto.textContent = towns[citiesToUse[i]].motto;
        yearFounded.textContent = ("Year Founded: " + towns[citiesToUse[i]].yearFounded);
        population.textContent = ("Population: " + towns[citiesToUse[i]].currentPopulation);
        rainfall.textContent = ("Annual Rainfall: " + towns[citiesToUse[i]].averageRainfall + "\"");
        card.appendChild(h2);
        card.appendChild(motto);
        card.appendChild(yearFounded);
        card.appendChild(population);
        card.appendChild(rainfall);
        card.appendChild(image);
        document.querySelector('div.cityCards').appendChild(card);
    }
  });



