import { IntervalHub } from "../js/IntervalHub.js";

export class MoveableObject {
  x = 200;
  y = 300;
  img;
  height = 100;
  width = 150;
  imageCache = {};
  currentImage = 0;
  speed = 0.15;

  constructor() {}

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {}

  moveLeft() {
    IntervalHub.startInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
