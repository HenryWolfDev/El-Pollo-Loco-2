import { IntervalHub } from "../js/IntervalHub.js";
import { Character } from "./Character.js";
import { Chicken } from "./Chicken.js";

export class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];

  ctx;
  canvas;
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.height,
      this.character.width
    );
    this.enemies.forEach((enemy) => {
      this.ctx.drawImage(
        enemy.img,
        enemy.x,
        enemy.y,
        enemy.width,
        enemy.height
      );
    });

    requestAnimationFrame(() => this.draw());
  }
}
