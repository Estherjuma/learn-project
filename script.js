function weather(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let city = document.querySelector(".current-city");
  city.innerHTML = searchInput.value;
}
let search = document.querySelector("#search-form");
search.addEventListener("submit", weather);

let currentDate = document.querySelector("#current-date");
let now = new Date();
let day = now.getDay();
let hour = now.getHours();
let min = now.getMinutes();

if (min < 10) {
  min = `0${min}`;
}
if (hour < 10) {
  hour = `0${hour}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

currentDate.innerHTML = `${days[day]} ${hour}:${min}`;
