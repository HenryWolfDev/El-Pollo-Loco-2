import { MoveableObject } from "./moveableObject.js";
import { SpawnXManager } from "../js/SpawnXManager.js";
import { IntervalHub } from "../js/IntervalHub.js";

export class Cloud extends MoveableObject {
  y = 10;
  width = 250;
  height = 150;
  constructor() {
    super().loadImage("../img/5_background/layers/4_clouds/1.png");
    this.x = SpawnXManager.getNextSpawnXForClouds();
    this.animate();
  }
  animate() {
    IntervalHub.startInterval(() => {
      this.x -= 0.15;
    }, 1000 / 60);
  }
}
