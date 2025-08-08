import { IntervalHub } from "../js/IntervalHub.js";
import { MoveableObject } from "./moveableObject.js";

export class Character extends MoveableObject {
  x = 120;
  y = 250;

  constructor() {
    super().loadImage("../img/2_character_pepe/2_walk/W-21.png");
  }

  jump() {}
}
