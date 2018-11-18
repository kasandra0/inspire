import WeatherController from "./components/weather/weather-controller.js";
import ImageController from "./components/image/image-controller.js";
import TodoController from "./components/todo/todo-controller.js";
import QuoteController from "./components/quote/quote-controller.js";

class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      imageController: new ImageController(),
      todoController: new TodoController(),
      quoteController: new QuoteController()
    }
  }
}
// not sure where to put this
function GetClock() {
  var d = new Date();
  var nhour = d.getHours(), nmin = d.getMinutes(), ap;
  if (nhour == 0) { ap = " AM"; nhour = 12; }
  else if (nhour < 12) { ap = " AM"; }
  else if (nhour == 12) { ap = " PM"; }
  else if (nhour > 12) { ap = " PM"; nhour -= 12; }

  if (nmin <= 9) nmin = "0" + nmin;

  var clocktext = "" + nhour + ":" + nmin + ap + "";
  document.getElementById('clock-frame').innerText = clocktext;
}
GetClock();
setInterval(GetClock, 60000);

window.app = new app()  