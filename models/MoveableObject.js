import { IntervalHub } from "../js/IntervalHub.js";

export class MoveableObject {
  x = 200;
  y = 300;
  img;
  height = 100;
  width = 150;

  constructor() {}

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {}

  moveLeft() {}
}
