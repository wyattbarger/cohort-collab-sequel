import Phaser from "phaser";

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "playerSpriteImage");
    scene.add.existing(this);

    // Set the custom controls for the Player class
    this.cursors = scene.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
  }

  // Add an update method for player game events
  update() {
    if (this.cursors.is.up) {
        this.y += 1;
    }
    else if (this.cursors.is.down) {
        this.y -= 1;
    }
    else if (this.cursors.is.left) {
        this.x -= 1;
    }
    else if (this.cursors.is.right) {
        this.x += 1;
    }
  }

}
