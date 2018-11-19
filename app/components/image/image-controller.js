import ImageService from "./image-service.js";

//Your ImageService is a global class what can you do here to instantiate it?

let _imageService = new ImageService();
export default class ImageController {
  constructor() {
    _imageService.getImage(this.drawImage)
  }
  drawImage(img) {
    document.getElementById('image-data').innerText = `source: ${img.site}`
    document.body.style.backgroundImage = `url("${img.url}")`
  }
}

