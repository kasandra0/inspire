const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=mountains'
const apiUrl = url + encodeURIComponent(url2);


const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});
function handleError(err) {
	throw new Error(err);
}

export default class ImageService {
	getImage(callWhenDone) {
		imgApi().then(res => {
			let imageArr = res.data.images;
			let imageIndex = Math.floor(imageArr.length * Math.random()) - 1
			callWhenDone(imageArr[imageIndex].url)
		})
			.catch(handleError)
	}
}
