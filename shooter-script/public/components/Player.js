import Phaser from "phaser";

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "playerSpriteImage");
    scene.add.existing(this);
  }
}
