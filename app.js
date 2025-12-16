const btn = document.querySelector("#getWeatherBtn");
const citys = document.querySelector("#cityName");
const temp = document.querySelector("#temperature");
const humi = document.querySelector("#Humidity");

const apikey = "fef4052468097cd6067b7a90595e608a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function getWeatherByLocation(lat, lon) {
  const response = await fetch(
    `${apiURL}&lat=${lat}&lon=${lon}&appid=${apikey}`
  );
  const data = await response.json();
  console.log(data);

  citys.innerHTML = data.name;
  temp.innerHTML = data.main.temp + " °C";
  humi.innerHTML = data.main.humidity + "%";
}

function getCurrentLocationWeather() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      getWeatherByLocation(lat, lon);
    },
    () => {
      alert("Location permission denied");
    }
  );
}

btn.addEventListener("click", () => {
  getCurrentLocationWeather();
});
