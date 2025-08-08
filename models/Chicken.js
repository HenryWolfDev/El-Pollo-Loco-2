import { MoveableObject } from "./moveableObject.js";
import { SpawnXManager } from "../js/SpawnXManager.js";

export class Chicken extends MoveableObject {
  width = 75;
  height = 100;
  y = 330;

  constructor() {
    super().loadImage("../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.x = SpawnXManager.getNextSpawnX();
  }
}
