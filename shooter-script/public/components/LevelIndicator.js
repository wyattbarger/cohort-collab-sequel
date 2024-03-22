import Phaser from "phaser";

export default class LevelIndicator extends Phaser.GameObjects.Sprite {
  constructor(scene, level) {
    // Add `textureKey` assigned to a empty string
    let frameKey = "";
    // Add a switch statement that will change the textureKey which the super sets as the Sprite's texture based on the level parameter passed to it
    switch (level) {
      case 1:
        console.log("Level 1 selected");
        frameKey = "0";
        break;
      case 2:
        console.log("Level 2 selected");
        frameKey = "1";
        break;
      case 3:
        console.log("Level 3 selected");
        frameKey = "2";
        break;
      default:
        console.log("Default Frame selected");
        frameKey = "0";
        break;
    };
    super(scene, 140, 0, "levelIndicatorSheet" ,frameKey);
    this.setOrigin(0.5, 0.25);
    this.setScale(0.75);
    scene.add.existing(this);
  };
};
