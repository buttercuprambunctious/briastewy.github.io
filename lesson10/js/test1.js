const apiURLW =
"https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ac9d47f7be2891297b6b3957a163e7a2&units=imperial";

fetch(apiURLW)
.then((response) => response.json())

.then((jsObject) => {
  const fiveDaysTemp = jsObject.list.filter((forecast) =>
    forecast.dt_txt.includes("18:00:00")
  );
  for (let i = 1; i < fiveDaysTemp.length + 1; i++) {
    var forecast = fiveDaysTemp[i - 1];
    var tempNum = "temp" + i;
    var forecastDate = new Date(forecast.dt_txt);
    document.getElementById(tempNum).textContent =  Math.round(forecast.main.temp);

  }});
