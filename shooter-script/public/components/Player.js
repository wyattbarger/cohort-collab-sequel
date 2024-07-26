import Phaser from "phaser";
import PlayerProjectile from "./PlayerProjectile";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "playerSpriteImage");
    scene.add.existing(this);

    // Enable arcade physics for the player
    scene.physics.world.enable(this);

    // Set boundaries so the player cannot be in the top area of the canvas storing game information
    scene.physics.world.setBounds(0, 65, 1280, 670);

    // Set the custom controls scheme for the Player class
    this.cursors = scene.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });

    // Add a PlayerProjectile to the Player class specified by Scene
    this.playerShot = new PlayerProjectile(scene, this);

    // Set a property of the Player class "hitpoints" to 3
    this.hitpoints = 3;

    // Set the control scheme for the players mouse
    this.mouseCursorX = 0;
    this.mouseCursorY = 0;
    // Track pointer movement input type
    scene.input.on("pointermove", (pointer) => {
      this.mouseCursorX = pointer.x;
      this.mouseCursorY = pointer.y;
    });
    // Track leftButtonDown input type
    scene.input.on("pointerdown", (pointer) => {
      if (pointer.leftButtonDown()) {
        this.playerShot.fire(pointer.x, pointer.y);
      }
    });

    // Set the origin point of the sprite to the center of the sprite, so when selecting a point to render the player in a Scene, the point you pick will render the sprite there at its center most pixel.
    this.setOrigin(0, 0);

    // Add a new Rectangle the same size as the sprite that is assigned to 'hitbox' to track hits on the player.
    this.hitbox = new Phaser.GameObjects.Rectangle(scene, x, y, 32, 32);
    this.hitbox.setOrigin(-0.5, -0.5);
    scene.add.existing(this.hitbox);
    scene.physics.world.enable(this.hitbox);

    this.setCollideWorldBounds(true);
  }

  // Set a takeDamage with an amount parameter
  takeDamage(amount) {
    this.hitpoints -= amount;
    if (this.hitpoints < 0) {
      this.hitpoints = 0; // Prevent negative health values
    } else if (this.hitpoints === 0) {
      this.scene.start("GameOver"); // If hitpoints value is zero trigger the "Gameover" scene
    }
  }

  // Add an update method for player game events
  update() {
    this.hitbox.setPosition(this.x, this.y);

    // Set WASD movement controls
    if (this.cursors.up.isDown) {
      this.y -= 2;
    } else if (this.cursors.down.isDown) {
      this.y += 2;
    } else if (this.cursors.left.isDown) {
      this.x -= 2;
    } else if (this.cursors.right.isDown) {
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
}
