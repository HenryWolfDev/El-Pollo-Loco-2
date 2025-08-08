import { MoveableObject } from "./moveableObject.js";
import { SpawnXManager } from "../js/SpawnXManager.js";

export class Cloud extends MoveableObject {
  constructor() {
    super().loadImage("../img/5_background/layers/4_clouds/1.png");
    this.x = SpawnXManager.getNextSpawnXForClouds();
    this.y = 10;
    this.width = 250;
    this.height = 150;
  }
}
