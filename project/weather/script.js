const weatherData = {
  pune: {
    temp: 27,
    desc: "Sunny",
    humidity: 40,
    wind: 5
  },
  mumbai: {
    temp: 30,
    desc: "Humid and Cloudy",
    humidity: 70,
    wind: 6
  },
  delhi: {
    temp: 35,
    desc: "Hot and Dry",
    humidity: 20,
    wind: 8
  },
  newyork: {
    temp: 22,
    desc: "Light Rain",
    humidity: 60,
    wind: 10
  },
  tokyo: {
    temp: 26,
    desc: "Clear Night",
    humidity: 50,
    wind: 4
  }
};

function getWeather() {
  const city = document.getElementById("citySelect").value;
  const box = document.getElementById("weatherBox");

  if (!city || !weatherData[city]) {
    box.innerHTML = `<p class="info">Please select a valid city.</p>`;
    return;
  }

  const data = weatherData[city];
  box.innerHTML = `
    <h2>${city[0].toUpperCase() + city.slice(1)}</h2>
    <p><strong>${data.desc}</strong></p>
    <p>🌡️ Temperature: ${data.temp}°C</p>
    <p>💧 Humidity: ${data.humidity}%</p>
    <p>🌬️ Wind: ${data.wind} km/h</p>
  `;
}
