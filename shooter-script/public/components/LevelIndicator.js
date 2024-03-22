import Phaser from "phaser";

export default class LevelIndicator extends Phaser.GameObjects.Sprite {
  constructor(scene, level) {
    // Add `textureKey` assigned to a empty string
    let frameKey = "";
    // Add a switch statement that will change the textureKey which the super sets as the Sprite's texture based on the level parameter passed to it
    switch (level) {
      case 1:
        frameKey = "levelOneIndicSprite";
        break;
      case 2:
        frameKey = "levelTwoIndicSprite";
        break;
      case 3:
        frameKey = "levelThreeIndicSprite";
        break;
      default:
        frameKey = "levelOneIndicSprite";
        break;
    };
    super(scene, 140, 0, "levelIndicatorSheet" ,frameKey);
    this.setOrigin(0.5, 0.25);
    this.setScale(0.75);
    scene.add.existing(this);
  };
};
