const apiKey = '78d5fa56e5b98392451d0b39daba3bab';
const weatherDiv = document.getElementById('weather');
const lat = '41.235914'
const lon = '-96.021023'

function fetchWeather () {

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const { name, main, weather } = data;
      const temperature = main.temp;
      const description = weather[0].description;

      const weatherContent = `
        <p>City: ${name}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${description}</p>
      `;

      weatherDiv.innerHTML = weatherContent;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      weatherDiv.innerHTML = `<p>Failed to fetch weather data.</p><br>${apiUrl}`;
    });
};

setInterval(fetchWeather(), 60000);