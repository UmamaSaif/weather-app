const apiKey = 'bd35e0d76c45977fad8effddeb8c55d2';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';


const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature').querySelector('span');
const descriptionElement = document.getElementById('description').querySelector('span');
const humidityElement = document.getElementById('humidity').querySelector('span');
const windSpeedElement = document.getElementById('windSpeed').querySelector('span');
const pressureElement = document.getElementById('pressure').querySelector('span');


searchButton.addEventListener('click', ()=> {
	const location = locationInput.value;
	if (location) {
		fetchWeather(location);
	}
});

function fetchWeather(location) {
	const url= `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
	fetch(url)
	.then(response => response.json())
	.then(data => {
		locationElement.textContent= data.name;
		temperatureElement.textContent= `${Math.round(data.main.temp)}°C`;
		descriptionElement.textContent= data.weather[0].description;
		humidityElement.textContent = `${data.main.humidity}%`;
		windSpeedElement.textContent = `${data.wind.speed} m/s`;
		pressureElement.textContent = `${data.main.pressure} hPa`;
	})
	.catch(error => {
		console.error('Error fetching weather data: ',error);
	});
}
