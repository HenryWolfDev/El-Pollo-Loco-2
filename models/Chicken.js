import { MoveableObject } from "./moveableObject.js";
import { SpawnXManager } from "../js/SpawnXManager.js";
import { imageLoader } from "../js/imageLoader.js";
import { IntervalHub } from "../js/IntervalHub.js";

export class Chicken extends MoveableObject {
  width = 75;
  height = 100;
  y = 330;

  images_Walking = imageLoader.ENEMIE_CHICKEN.chicken_normal.walk;

  constructor() {
    super().loadImage("../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.x = SpawnXManager.getNextSpawnX();
    this.speed = 0.15 + Math.random() * 0.25;
    this.loadImages(this.images_Walking);
    this.animate();
  }

  animate() {
    this.moveLeft();
    IntervalHub.startInterval(() => {
      let i = this.currentImage % this.images_Walking.length;
      let path = this.images_Walking[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000 / 4.5);
  }
}
