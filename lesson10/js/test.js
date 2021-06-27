var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

var daysInWeek = [
"day1",
"day2",
"day3",
"day4",
"day5"
];

for (i = 0; i < 5; i++){
  document.getElementById(daysInWeek[i]).innerHTML = weekday[(d.getDay() + i) % 7];
}


const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ac9d47f7be2891297b6b3957a163e7a2&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);    
    document.getElementById('tempNum').textContent = (jsObject.main.temp);
    document.getElementById('currentDesc').textContent = (jsObject.weather[0].description);  
    document.getElementById('humidNum').textContent = (jsObject.main.humidity);  
    document.getElementById('windNum').textContent = (jsObject.wind.speed);

const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
});