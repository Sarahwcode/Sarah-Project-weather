function changeDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dates = days[date.getDay()];

  let day = document.querySelector("#day");
  day.innerHTML = dates;
  return dates;
}
let now = new Date();
let changingDates = changeDate(now);
console.log(changingDates);

function changeTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let changeHour = document.querySelector("#hour");
  let changeMinute = document.querySelector("#minute");
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    hours = `0${minutes}`;
  }
  changeHour.innerHTML = hours;
  changeMinute.innerHTML = minutes;
}
let currentDate = new Date();
changeTime(currentDate);

function cityName(response) {
  let cityNames = response.data.city;
  let weather = response.data.daily[0];
  let temperature = Math.round(weather.temperature.day);
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityNames;
  let changeTemp = document.querySelector("#temp");
  changeTemp.innerHTML = `${temperature}°C`;
}
function getCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#submit-form").value;
  let apiKey = "145ba0dc50b14bt75oafffd6a19b4a36";
  let url = `https://api.shecodes.io/weather/v1/forecast?query=${cityInput}&key=${apiKey}&units=metric`;
  axios.get(url).then(cityName);
}

let formInput = document.querySelector("#enter-city");
formInput.addEventListener("submit", getCity);
