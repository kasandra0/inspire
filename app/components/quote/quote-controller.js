import QuoteService from "./quote-service.js";

let qs = new QuoteService
let quote = ''

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(drawQuote)
	}
	showAuthor() {

	}
}
function drawQuote(quoteData) {
	quote = quoteData;
	document.getElementById('quote-frame').innerText = quoteData.body;
	// THIS TOOK ME ALL DAY TO LEARN AND I'M VERY PROUD OF IT
	$("#quote-frame").hover(function () {
		$(this).text(`${quoteData.author}`)
	}, function () {
		$(this).text(`${quoteData.body}`)


	})

}