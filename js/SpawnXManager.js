export class SpawnXManager {
  static spawnX = 500;
  static spwanX_Clouds = 200;

  static getNextSpawnX() {
    const currentX = this.spawnX;
    this.spawnX += Math.random() * 10 + 100;
    return currentX;
  }

  static getNextSpawnXForClouds() {
    const currentX = this.spwanX_Clouds;
    this.spwanX_Clouds += Math.random() * 100 + 200;
    return currentX;
  }
}
