import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()


export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(temp => {
			console.log(temp);
			//What can you do with this weather object?
			console.log("Current Temp: " + temp)
			let template = `${temp} F`
			document.getElementById('weather').innerText = template
		})
	}
}
