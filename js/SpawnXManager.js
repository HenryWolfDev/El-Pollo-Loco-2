export class SpawnXManager {
  static spawnX = 400;
  static spwanXClouds = 200;

  static getNextSpawnX() {
    const currentX = this.spawnX;
    this.spawnX += Math.random() * 50 + 150;
    return currentX;
  }

  static getNextSpawnXForClouds() {
    const currentX = this.spwanXClouds;
    this.spwanXClouds += Math.random() * 120 + 250;
    return currentX;
  }
}
