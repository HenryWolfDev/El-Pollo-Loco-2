import { World } from "../models/World.js";

let world;

function initGame() {
  window.addEventListener("load", function () {
    const canvas = document.getElementById("canvas");
    canvas.width = 720;
    canvas.height = 480;

    world = new World(canvas);

    console.log(world.character);
  });
}

initGame();
