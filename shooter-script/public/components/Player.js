import Phaser from "phaser";

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "playerSpriteImage");
    scene.add.existing(this);

    // Set the custom controls scheme for the Player class
    this.cursors = scene.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });

    // Set the control scheme to track the players mouse pointer movement within the scene
    this.mouseCursorX = 0;
    this.mouseCursorY = 0;
    scene.input.on('pointermove', (pointer) => {
      this.mouseCursorX = pointer.x;
      this.mouseCursorY = pointer.y;
    });

    // Set the origin point of the sprite to the center of the sprite, so when selecting a point to render the player in a Scene, the point you pick will render the sprite there at its center most pixel.
    this.setOrigin(0,0);

    // Add a new Rectangle the same size as the sprite that is assigned to 'hitbox' to track hits on the player.
    this.hitbox = new Phaser.GameObjects.Rectangle(scene, x, y, 32, 32);
    this.hitbox.setOrigin(-0.5,-0.5)
    scene.add.existing(this.hitbox);
    scene.physics.world.enable(this.hitbox);
  };

  // Add an update method for player game events
  update() {
    this.hitbox.setPosition(this.x, this.y)

    // Set WASD movement controls
    if (this.cursors.up.isDown) {
      console.log("up"); 
      this.y -= 2;
    } else if (this.cursors.down.isDown) {
      console.log("down");
      this.y += 2;
    } else if (this.cursors.left.isDown) {
      console.log("left");
      this.x -= 2;
    } else if (this.cursors.right.isDown) {
      console.log("right");
      this.x += 2;
    }
     
    // Set diagonal movement controls
    if (this.cursors.up.isDown && this.cursors.left.isDown) {
        this.x -= 1;
        this.y -= 1;
    } else if (this.cursors.up.isDown && this.cursors.right.isDown) {
        this.x += 1;
        this.y -= 1;
    } else if (this.cursors.down.isDown && this.cursors.left.isDown) {
        this.x -= 1;
        this.y += 1;
    } else if (this.cursors.down.isDown && this.cursors.right.isDown) {
        this.x += 1;
        this.y += 1;
    }
  }
};
