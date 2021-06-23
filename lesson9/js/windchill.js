let temp = parseFloat(document.getElementById("tempNum").innerHTML);
let wind = parseFloat(document.getElementById("windNum").innerHTML);
if (temp <= 50 && wind >= 3){
let windchill = 35.74 + .6215 * temp - 35.75 * (wind ** .16) + .4275 * temp * (wind ** .16);
document.getElementById("chillNum").innerHTML = windchill.toFixed(1) + "&deg;F";
}
else document.getElementById("chillNum").innerHTML = "none";
// document.getElementById("chillNum").innerHTML = 5;