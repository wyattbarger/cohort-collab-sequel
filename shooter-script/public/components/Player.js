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

    // Set the origin point of the sprite to the center of the sprite, so when selecting a point to render the player in a Scene, the point you pick will render the sprite there at its center most pixel.
    this.setOrigin(0, 0);
  }

  // Add an update method for player game events
  update() {
    if (this.cursors.up.isDown) {
      console.log("up");
      this.y -= 1;
    } else if (this.cursors.down.isDown) {
      console.log("down");
      this.y += 1;
    } else if (this.cursors.left.isDown) {
      console.log("left");
      this.x -= 1;
    } else if (this.cursors.right.isDown) {
      console.log("right");
      this.x += 1;
    }
  }
}
