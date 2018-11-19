import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()


export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			let fahren = Math.floor(weather.main.temp * 1.8 - 459.67);
			let template = `${fahren} F`
			let icon = weather.weather[0].icon
			let conditions = weather.weather[0].description
			template += `<img src="http://openweathermap.org/img/w/${icon}.png"/>`
			template += `<p>${conditions}</p>`
			document.getElementById('weather-frame').innerHTML = template
		})
	}
}
