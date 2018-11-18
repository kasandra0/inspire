import QuoteService from "./quote-service.js";

let qs = new QuoteService


export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(drawQuote)
	}
}
function drawQuote(quote, author) {
	let template = quote + ' -' + author;

	document.getElementById('quote-frame').innerText = template;
}