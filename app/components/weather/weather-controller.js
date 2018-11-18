import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()


export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(kelvin => {
			let fahren = Math.floor(kelvin * 1.8 - 459.67);
			//What can you do with this weather object?
			let template = `${fahren} F`
			document.getElementById('weather-frame').innerText = template
		})
	}
}
