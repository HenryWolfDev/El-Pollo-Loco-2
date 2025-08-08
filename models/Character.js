import { IntervalHub } from "../js/IntervalHub.js";
import { MoveableObject } from "./moveableObject.js";

export class Character extends MoveableObject {
  x = 10;
  y = 110;
  width = 150;
  height = 325;

  constructor() {
    super().loadImage("../img/2_character_pepe/2_walk/W-21.png");
  }

  jump() {}
}
