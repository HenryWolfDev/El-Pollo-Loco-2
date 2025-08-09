import { IntervalHub } from "../js/IntervalHub.js";
import { MoveableObject } from "./moveableObject.js";
import { imageLoader } from "../js/imageLoader.js";

export class Character extends MoveableObject {
  x = 10;
  y = 135;
  width = 150;
  height = 300;
  speedX = 20;

  images_Walking = imageLoader.PLAYER.walk;

  constructor(world) {
    super().loadImage("../img/2_character_pepe/2_walk/W-21.png");
    this.world = world;

    this.loadImages(this.images_Walking);

    this.animate();
  }

  animate() {
    IntervalHub.startInterval(() => {
      if (this.world.keyboard.RIGHT) {
        let i = this.currentImage % this.images_Walking.length;
        let path = this.images_Walking[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 1000 / 30);
  }

  jump() {}
}
