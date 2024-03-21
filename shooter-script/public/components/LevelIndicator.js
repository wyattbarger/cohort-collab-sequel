import Phaser from "phaser";

export default class LevelIndicator extends Phaser.GameObjects.Sprite {
  constructor(scene, level) {
    // Add `textureKey` assigned to a empty string
    let textureKey = "";
    // Add a switch statement that will change the textureKey which the super sets as the Sprite's texture based on the level parameter passed to it
    switch (level) {
      case 1:
        textureKey = "levelOneIndicSprite";
        break;
      case 2:
        textureKey = "levelTwoIndicSprite";
        break;
      case 3:
        textureKey = "levelThreeIndicSprite";
        break;
      default:
        textureKey = "levelOneIndicSprite";
        break;
    }
    super(scene, 0, 20, textureKey);
    this.setOrigin(0.5, 0.25);
    this.setScale(0.75);
    scene.add.existing(this);
  }
}
