const searchWeather = async () => {
  const location = document.getElementById('search').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY&units=metric`;
  try {
      const response = await fetch(url);
      const data = await response.json();
      displayWeather(data);
  } catch (error) {
      console.log('Error fetching weather data:', error);
  }
};

const displayWeather = (data) => {
  document.getElementById('location').innerText = data.name;
  document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
  document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
  document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
  document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;
};

