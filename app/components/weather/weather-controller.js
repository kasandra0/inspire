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
			//What can you do with this weather object?
			let template = `${fahren} F`
			let icon = weather.weather[0].icon
			template += `<img src="http://openweathermap.org/img/w/${icon}.png"/>`
			document.getElementById('weather-frame').innerHTML = template
		})
	}
}
