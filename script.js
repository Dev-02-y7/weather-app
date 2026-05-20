const apiKey = "4d4d6c2b1ffcfaf1e1c148679dd0385b";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async () => {

  const city = document.getElementById("cityInput").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);

  const data = await response.json();

  const weatherDiv = document.getElementById("weatherResult");

  weatherDiv.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;
});